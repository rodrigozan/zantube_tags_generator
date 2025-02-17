import { Html, Head, Main, NextScript } from 'next/document';
import { Menubar } from 'primereact/menubar'; 

import HeaderAd from '@/components/header_ad/HeaderAd';
import ImageTooltip from '@/components/image_tooltip/image_tooltip';

export default function Document() {
  // Itens do menu
  const start = <ImageTooltip 
                  src="https://smartutilitybox.com/keywords_generator/assets/img/keywords_generator_logo.png"
                  width={40}
                  height={40}
                  className="rounded-lg shadow-lg mr-2"
                  alt="Zantube Logo"
                  tooltip="Zantube Logo"
                />;
  const items = [
    {
      label: 'About',
      icon: 'pi pi-info-circle',
      command: () => window.location.href = '/about' 
    },
    {
      label: 'Contact',
      icon: 'pi pi-phone',
      command: () => window.location.href = '/contact'
    }
  ];
  const end = <a href="https://smartutilitybox.com/" target="_new">
    {/* <img src="https://smartutilitybox.com/assets/img/Smart-Utility-Box.png" width="40" height="40" className="mr-2" alt="Smart Utility Box" /> */}
    <ImageTooltip 
        src="https://smartutilitybox.com/assets/img/Smart-Utility-Box.png"
        width={40}
        height={40}
        className="rounded-lg shadow-lg mr-2"
        alt="Smart Utility Box"
        tooltip="Smart Utility Box"
      />
    </a>

  return (
    <Html lang="en">
      <Head>
        <title>YouTube Keywords Generator - Rapidtags - Get Relevant Keywords for Your Videos - YouTube Tag Generator and Optimizer</title>
        <meta name="description" content="Generate relevant YouTube Keywords easily with our YouTube Keywords Generator. Improve your video's visibility and SEO with the best Keywords. The Rapidtags YouTube tag generator is designed to quickly generate SEO effective Keywords for your YouTube s." />
        <meta name="keywords" content="Rapidtags tag generator, Tag generator, YouTube SEO tag tool, YouTube tag generator, YouTube tagging, YouTube tagging tool, YouTube tag optimization" />
        <meta name="author" content="Zantube" />
        <meta property="og:title" content="Zantube | YouTube Keywords Generator - Get Relevant Keywords for Your Videos" />
        <meta property="og:url" content="https://smartutilitybox.com/keywords_generator/" />
        <meta property="og:image" content="https://smartutilitybox.com/keywords_generator/assets/img/keywords_generator_logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:description" content="Generate relevant YouTube Keywords easily with our YouTube Keywords Generator. Improve your video's visibility and SEO with the best Keywords." />
        <link rel="icon" href="https://smartutilitybox.com/keywords_generator/assets/img/keywords_generator_logo.png" />
      </Head>
      <body>
        <header id="topbar">
          <Menubar model={items} start={start} end={end} />
          {/* <HeaderAd 
            adImage="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgozIWLPo3uknx4GA1rpZOY-CPaRbcvh8c8ab3ED6WVq96HFrog0WDYWPtawEUFuAwuQwwcEWEF_uz_hrjl8FbgNFyHIxu09tYS1w2jsMZdRUW0LP7RELdmoiJdNhYKm3SFoA9mu1my-44zOuf_XVjwOATt-csB2__7vxAMsgC-j77H0qojOsAT0cCiX4qk/w640-h346/The%20Genius%20Wave.png" 
            adLink="https://myproductoffer.com/thegeniuswave-official-website" 
          /> */}
        </header>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
