import React, { useState, useEffect } from 'react';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Fieldset } from 'primereact/fieldset';
import { Divider } from 'primereact/divider';
import { Chip } from 'primereact/chip';
import { Message } from 'primereact/message';

import HeaderAd from '@/components/header_ad/HeaderAd';
import SidebarAd from '@/components/sidebar_ad/SidebarAd';

const IndexPage = () => {
  const [hideScrollbar, setHideScrollbar] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [tags, setTags] = useState([]);
  const [alert, setAlert] = useState(false)
  const [keyword_null, setKeywordNull] = useState(false)
  const [isCopied, setIsCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false)

  const youtubeApiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

  useEffect(() => {
    setHideScrollbar(true);

    return () => {
      setHideScrollbar(false);
    };
  }, []);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleInputClick = () => {
    setKeywordNull(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!keyword || keyword === null || keyword === "") {
      setKeywordNull(true)
      return
    }

    setIsClicked(true)
    setIsLoading(true)

    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${keyword}&type=video&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
      );
      const data = await response.json();
      console.log("Response", data);
      const videoId = data.items[0].id.videoId;
      const tagsResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
      );
      const tagsData = await tagsResponse.json();
      setTags(tagsData.items[0].snippet.tags);
    } catch (error) {
      setAlert(true)
      console.error('Error fetching data: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyTags = () => {
    const tagsString = tags.join(', ');
    navigator.clipboard.writeText(tagsString);
    setIsCopied(true)
  };

  const handleClear = () => {
    setKeyword('');
    setTags([]);
    setIsClicked(false)
    setIsLoading(false)
    setIsCopied(false)
  };

  return (
    <main style={{ height: '100vh' }} className="flex align-items-center w-full">
      <div className="grid grid-nogutter surface-0 text-800 w-full">        
        <div className="col-12 text-center p-8">
          <h1 className='text-primary'>YouTube Keywords Generator</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-column gap-2 my-5">
              <InputText placeholder="Keyword" value={keyword} onClick={handleInputClick} onChange={handleChange} className="w-full" />
              <small id="username-help">
                Enter your title or your keyword and click in bellow button for generate your YouTube Keywords
              </small>
              <div className="card flex justify-content-center">
                {alert && <Message className="w-full" severity="error" text="It's was possible find tags for this keyword" />}
                {keyword_null && <Message className="w-full" severity="error" text="The keyword field needs to be filled in" />}
              </div>
            </div>
            <Button
              label={isLoading ? 'Loading...' : 'Get Tags'}
              icon={isLoading ? 'pi pi-spinner pi-spin' : null}
              disabled={isLoading && isClicked}
              className="w-full"
            />
          </form>
          {tags.length > 0 && (
            <div>
              <Divider />
              <div className="card">
                <Fieldset legend="Relevant Tags" toggleable>
                  <div className="m-0">
                    <div>
                      {tags.map((tag, index) => (
                        <Chip label={tag} className='ml-2 mb-2' />
                      ))}
                    </div>
                  </div>
                  <Button
                    label={isCopied ? 'Copied to clipboard!' : 'Copy Tags'}
                    icon={isCopied ? 'pi pi-check' : 'pi pi-clone'}
                    severity="help"
                    className="mt-5"
                    onClick={handleCopyTags}
                  />
                  <Button label="Clear" icon="pi pi-times" className="p-button-danger ml-3" onClick={handleClear} />
                </Fieldset>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
