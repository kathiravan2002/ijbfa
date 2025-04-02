import React, { useState } from 'react'
import Home from '../../shared/components/Home/Home.jsx'
import { useNavigate } from 'react-router-dom';


function Homepage() {

  const navigate = useNavigate();
  
  const researchDomains = [
      'Blockchain Technology',
      'FinTech',
      'Cryptocurrency',
      'Decentralized Finance (DeFi)',
      'Smart Contracts',
      'Digital Payments',
      'Financial Security',
      'Distributed Ledger ',
      'Tokenization',
      'Peer-to-Peer Transactions',
      'Blockchain Technology',
      'Digital Banking',
      'Blockchain Governance',
      'Crypto Regulations',
      'Secure Transactions',
  
      'Cybersecurity in Finance',
      'Blockchain Scalability',
      'Cross-Border Payments',
      'Supply Chain Finance',
      'Initial Coin Offerings',
      'Security Token Offerings ',
      'Non-Fungible Tokens ',
      'Smart Contract Security',
      'Fraud Detection in FinTech',
      'Risk Management',
      'Privacy-Preserving Blockchain',
      'Central Bank Digital Currency ',
      'RegTech',
      'InsurTech',
      'Artificial Intelligence in FinTech ',
   
      'Machine Learning in Blockchain',
      'Digital Asset Management',
      'DeFi Lending Platforms',
      'Cloud Computing in FinTech',
      'Real-Time Settlements',
      'FinTech Startups',
      'Blockchain for Banking',
      'Payment Gateways',
      'Microfinance and Blockchain',
      'Stablecoins',
      'FinTech Innovations',
      'Embedded Finance',
      'Open Banking',
      'Web3 and Finance',
      'Metaverse Finance',
  ];
  return (
    <>
    <Home navigate={navigate} researchDomains={researchDomains}/>
    
    </>
  )
}

export default Homepage