import React from 'react';
import styles from './Index.less'

const Intro = props => {
  return (
    <div className={styles.pIntro}>
      <h1>SUPER IMPORTANT LEGAL DOCUMENT</h1>
      <p>------------------------------</p>
      <p>I don't give two hoots what you do with any of the design or code you find here.</p>

      <p>Actually, I do. I hope you take it and use it, uncredited, on a super commercial website and get wicked rich off it. I hope you use it at work and your boss is impressed and you get a big promotion. I hope it helps you design a website and that website impresses somebody you think is super hot and you get married and have smart, chill babies. I hope you use the code in a blog post you write elsewhere and that website gets way more popular and awesome than this one.</p>

      <p>If you feel like telling me about it, cool. If not, no big deal. If you feel better crediting it, that's cool. If not, don't sweat it.</p>

      <p>If you copy an entire article from this site and republish it on your own site like you wrote it, that's a little uncool. I won't be mad at you for stealing, I just think you're better than that and want to see you do better. I'm not going to come after you though. I'd rather play ball with my dog. The only time I'll be mad at you is if you go out of your way to try and hurt me somehow. And again I probably won't even be mad, just sad. Unless I'm having a bad day too, in which case I apologize in advance for my snarky replies.</p>

      <p>I want the web to get better and being all Johnny Protective over everything doesn't get us there. I understand other people feel differently about this and might have semi-legit reasons for protecting certain code, design, writing, or whatever. I work on some closed-source projects myself. CSS-Tricks isn't one of them. Go nuts.</p>
    </div>
  );
};

export default Intro;
