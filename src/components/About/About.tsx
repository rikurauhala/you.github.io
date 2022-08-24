import { useEffect, useState } from 'react';

import ReactMarkdown from 'react-markdown';

import Content from '../../content/about.md';

const About = () => {
  const [aboutText, setAboutText] = useState('');

  useEffect(() => {
    fetch(Content)
      .then(content => content.text())
      .then(text => setAboutText(text))
      .catch(error => console.error(error));
  }, []);

  return (
    <ReactMarkdown>
      {aboutText}
    </ReactMarkdown>
  );
};

export default About;
