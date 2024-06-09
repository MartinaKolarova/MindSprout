import { Bubble } from './Bubble/Bubble';
import { Dialog } from './Dialog/Dialog';
import styles from './Tree.module.css';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  FacebookShareButton,
  FacebookIcon,
} from 'next-share';

export const Tree = ({ category }) => {
  const [phase, setPhase] = useState('stabilization');
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [exercises, setExercises] = useState([]);
  const currentPhaseExercises = exercises.filter((exercise) => {
    return exercise.targetId === phase;
  });

  const getRandomSubset = (arr, size) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, size);
  };

  const subset = useMemo(
    () => getRandomSubset(currentPhaseExercises, 3),
    [category, currentPhaseExercises.length],
  );
  console.log(subset, currentPhaseExercises);

  useEffect(() => {
    if (category === 1) {
      const fetchExercises = async () => {
        const response = await fetch('/api/friends');
        const json = await response.json();
        setExercises(json);
      };

      fetchExercises();
    }
  }, [category]);

  const handleFinishExercise = () => {
    if (phase === 'stabilization') {
      setPhase('selfperception');
    } else if (phase === 'selfperception') {
      setPhase('problemsolving');
    } else if (phase === 'problemsolving') {
      setPhase('userHasFinished');
    }
    setSelectedExercise(null);
  };

  if (category === null) {
    return null;
  } else if (category !== 1) {
    return (
      <p className={styles.apology}>Omlouváme se, na obsahu se dále pracuje.</p>
    );
  }

  const handleCloseExercise = () => {
    setSelectedExercise(null);
  };

  return (
    <div className={styles.mainContainer}>
      {phase === 'userHasFinished' ? (
        <>
          <div>
            <p>
              Máme radost pokud ti naše stránka pomohla cítit se lépe. Pokud bys
              ji rád/a doporučil někomu jinému, můžeš nás sdílet.
            </p>
            <FacebookShareButton
              url={'https://mind-sprout.vercel.app/'}
              quote={
                'MindSprout je stránka pomáhající teenagerům pečovat o své psychické zdraví'
              }
              hashtag={'#mindsprout'}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            <FacebookMessengerShareButton
              url={'https://mind-sprout.vercel.app/'}
              appId={''}
            >
              <FacebookMessengerIcon size={32} round />
            </FacebookMessengerShareButton>
          </div>
          <div>
            <p>
              Pokud se stále cítíš mizerně a tvůj problém je větší než naše
              stránka dokáže obsáhnout. Můžeš využít sekci kontakty
            </p>
            <Link href="/kontakty" className={styles.buttonContact}>
              Kontakty
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className={styles.tree}></div>
          <div className={styles.bubbles}>
            {subset.map((exercise) => (
              <Bubble
                setSelectedExercise={setSelectedExercise}
                exercise={exercise}
                exerciseContent={exercise.content.text}
                key={exercise.id}
              />
            ))}
          </div>
        </>
      )}
      <Dialog
        exercise={selectedExercise}
        closeExercise={handleCloseExercise}
        finishExercise={handleFinishExercise}
      />
    </div>
  );
};
