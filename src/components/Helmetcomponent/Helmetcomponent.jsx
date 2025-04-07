import { Helmet } from "react-helmet";

const Helmetcomponent = ({ title }) => {
  return (
    <Helmet>
    <title>{title}</title>
    <meta name="keywords" content="IJBFA, International Journal of Blockchain and FinTech Applications  ,Blockchain Technology, Digital Banking, Tokenization,Digital Payments,Cryptocurrency ,Web3 and Finance ,Open Banking ,Blockchain for Banking ,Cloud Computing in FinTech,Machine Learning in Blockchain,RegTech,Smart Contract Security,Initial Coin Offerings,Blockchain Scalability,Crypto Regulations ,Blockchain Technology ,FinTech" />
    <meta name="description" content="IJBFA publishes cutting-edge research on blockchain technology, digital finance, and security, advancing innovation in FinTech and decentralized systems." />
    <meta name="author" content="IJBFA Editorial Team" />
    <meta name="robots" content="index, follow" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="International Journal of Blockchain and FinTech Applications" />
    <meta property="og:description" content="IJBFA publishes cutting-edge research on blockchain technology, digital finance, and security, advancing innovation in FinTech and decentralized systems." />
    <meta property="og:url" content="https://www.ijbfa.com/" />
    <meta property="og:image" content="https://ijbfa.com/assets/IJBFA.png" />

    <link rel="canonical" href="https://www.ijbfa.com/" />
    <link rel="icon" type="image/png" href="https://www.ijbfa.com/assets/Fav.png" />

  </Helmet>
  );
};

export default Helmetcomponent;