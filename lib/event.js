import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "Event");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.Json$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const data = JSON.parse(fileContents);

    // Use gray-matter to parse the post metadata section

    // Combine the data with the id
    return {
      id: fileName.replace(/\.json$/, ""),
      ...data.mainData,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.json$/, ""),
      },
    };
  });
}

export function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.json`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const data = JSON.parse(fileContents);

  // Combine the data with the id
  return {
    id,
    data,
  };
}
