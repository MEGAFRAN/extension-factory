import * as React from 'react';
import styles from './../../styles/components/button-panel.module.scss';

interface ButtonPanelProps {
  numberOfButtons: number;
  arrayOfLinks: string[];
  arrayOfNames: string[];
}

export const ButtonPanel: React.FC<ButtonPanelProps> = ({
  numberOfButtons,
  arrayOfLinks,
  arrayOfNames
}) => {
  return (
    <div className={styles.container}>
      {Array.from({ length: numberOfButtons }).map((_, index) => (
          <a key={index}
            href={arrayOfLinks[index]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={arrayOfNames[index]}
          >
            {arrayOfNames[index]}
          </a>
      ))}
    </div>
  );
};
