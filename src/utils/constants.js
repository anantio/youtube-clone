const GOOGLE_API_KEY = "AIzaSyDDEPBNMbhqv6PWN2hNN6-_SofYzkAvH7M";

export const YOUTUBE_VIDEOS_API =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  GOOGLE_API_KEY;
export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const commentsData = [
  {
    name: "Anant Singh",
    text: "Lorem Ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Anant Singh",
        text: "Lorem Ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Anant Singh",
            text: "Lorem Ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Anant Singh",
                text: "Lorem Ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Anant Singh",
                    text: "Lorem Ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Anant Singh",
                        text: "Lorem Ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Anant Singh",
    text: "Lorem Ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Anant Singh",
        text: "Lorem Ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Anant Singh",
            text: "Lorem Ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Anant Singh",
    text: "Lorem Ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Anant Singh",
        text: "Lorem Ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Anant Singh",
            text: "Lorem Ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Anant Singh",
                text: "Lorem Ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Anant Singh",
                    text: "Lorem Ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Anant Singh",
    text: "Lorem Ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];
