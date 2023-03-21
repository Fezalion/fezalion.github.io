import React, { useEffect, Suspense } from "react";
import { domAnimation, LazyMotion, m } from "framer-motion";
import FezAnimations from "../animations";

function GithubStars() {
  const [stars, setStars] = React.useState(0);
  const [followers, setFollowers] = React.useState(0);
  const [publicRepos, setPublicRepos] = React.useState(0);
  const [publicGists, setPublicGists] = React.useState(0);

  useEffect(() => {
    fetch("https://api.github.com/users/Fezalion")
      .then((res) => res.json())
      .then((res) => {
        setFollowers(res.followers);
        setPublicRepos(res.public_repos);
        setPublicGists(res.public_gists);
      });
    fetch("https://api.github.com/users/Fezalion/starred")
      .then((res) => res.json())
      .then((res) => {
        setStars(res.length);
      });
  }, []);
  return (
    <Suspense fallback={<div> Loading... </div>}>
      <m.p
        className="text-lg font-normal text-gray-500 sm:px-16 lg:text-xl xl:px-48"
        initial="hidden"
        animate="show"
        variants={FezAnimations.itemDelay}
      >
        I have {followers} Followers, {publicRepos} Repos, {publicGists} Gists
        and {stars} Stars on Github!
      </m.p>
    </Suspense>
  );
}

export default GithubStars;
