## 💬 About
I'm using [http://ergast.com/mrd/](http://ergast.com/mrd/) public API to show the F1 world champions starting from 2005 until now. Clicking on a year shows the list of the winners for every race for the selected year. Also highlighted the row when the winner has been the world champion in the same season.

## 🚀 Live Demo
[pitman.vercel.app](https://pitman.vercel.app/)

## 📦️ Usage
```bash
git clone https://github.com/Gronax/pitman.git
cd pitman
yarn install
yarn dev
```

## 🏗️ Tech Stack
- [React](https://reactjs.org/)
- [Next](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)

## 📝 My Notes
I have choose Reactjs as frontend library because it's easy to use, mantain and well documented. And Nextjs because it provide faster build time, less config and easy to deploy on Vercel. I've always wanted to use Typescript so I thougt It's the right time to use it because you have to push yourself to try new things otherwise lazyness always the winner. Although It took so much of my time, dealing with the types for the first time is really complicated It was the real challenge for me I guess. As a matter of time, I couldn't use unit testing. Shame on me. 🙈

My approach is statically rendering years from 2005 to now. When a year selected, on `[year].tsx` file I get the year with query param. On build time I make a two API calls, one for winners for each race, one for get the world champion for selected year. To highlight the world champion I match these two API calls by driver_id. On the race list I provide race name, circuit name, driver name, driver team, driver date of birth, driver code and number.