import React, { useEffect, Suspense } from "react";
import { domAnimation, LazyMotion, m } from "framer-motion";
import FezAnimations from "../animations";

function GithubStars() {
  const [data, setData] = React.useState({
    followers: 0,
    publicRepos: 0,
    publicGists: 0,
    stars: 0
  });

  useEffect(() => {
    async function fetchGithubData() {
      try {
        // Fetch user data
        const userResponse = await fetch("https://api.github.com/users/Fezalion");
        const userData = await userResponse.json();
        
        // Fetch all starred repositories
        let stars = 0;
        let page = 1;
        let perPage = 100; // Max per page is 100
        let fetching = true;

        while (fetching) {
          const starredResponse = await fetch(`https://api.github.com/users/Fezalion/starred?page=${page}&per_page=${perPage}`);
          const starredData = await starredResponse.json();
          
          stars += starredData.length;
          fetching = starredData.length === perPage; // If less than perPage, we've reached the last page
          page++;
        }

        setData({
          followers: userData.followers,
          publicRepos: userData.public_repos,
          publicGists: userData.public_gists,
          stars: stars
        });
      } catch (error) {
        console.error("Failed to fetch GitHub data:", error);
      }
    }

    fetchGithubData();
  }, []);

  return (
    <Suspense fallback={<></>}>
      <m.p
        className="text-lg font-normal text-gray-500 sm:px-16 lg:text-xl xl:px-48"
        initial="hidden"
        animate="show"
        variants={FezAnimations.itemDelay}
      >
        I have {data.followers} Followers, {data.publicRepos} Repos, {data.publicGists} Gists and {data.stars} Stars on Github!
      </m.p>
    </Suspense>
  );
}

export default GithubStars;
