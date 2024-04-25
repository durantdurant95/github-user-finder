// function to fetch github user info
export async function fetchGithubUser(user: string): Promise<any> {
  const url = `https://api.github.com/users/${user}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// function to fetch 3 most recent repos
export async function fetchGithubUserRepos(user: string): Promise<any> {
  const url = `https://api.github.com/users/${user}/repos?per_page=5`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
