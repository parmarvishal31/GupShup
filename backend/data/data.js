const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "Jignesh",
        email: "jignesh@example.com",
      },
      {
        name: "Vishal",
        email: "vishal@example.com",
      },
    ],
    _id: "617a077e18c25468bc7c4dd4",
    chatName: "Jignesh",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Guest User",
        email: "guest@example.com",
      },
      {
        name: "Vishal",
        email: "vishal@example.com",
      },
    ],
    _id: "617a077e18c25468b27c4dd4",
    chatName: "Guest User",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Nayan",
        email: "nayan@example.com",
      },
      {
        name: "Vishal",
        email: "vishal@example.com",
      },
    ],
    _id: "617a077e18c2d468bc7c4dd4",
    chatName: "Nayan",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Jignesh",
        email: "jignesh@example.com",
      },
      {
        name: "Vishal",
        email: "vishal@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    _id: "617a518c4081150716472c78",
    chatName: "Friends",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Bhavik",
        email: "bhavik@example.com",
      },
      {
        name: "Vishal",
        email: "vishal@example.com",
      },
    ],
    _id: "617a077e18c25468bc7cfdd4",
    chatName: "Bhavik",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Jignesh",
        email: "jignesh@example.com",
      },
      {
        name: "Vishal",
        email: "vishal@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    _id: "617a518c4081150016472c78",
    chatName: "Chill Zone",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
];


module.exports = { chats };