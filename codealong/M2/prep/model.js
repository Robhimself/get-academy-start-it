const roomGame = {
  roomA: {
    doorToRoom: [
      {
        doorColor: "red",
        doorName: "B",
      },
      {
        doorColor: "green",
        doorName: "D",
      },
    ],
    roomKey: {
      haveKey: true,
      keyColor: "red",
    },
  },
  roomB: {
    doorToRoom: [
      {
        doorColor: "red",
        doorName: "A",
      },
      {
        doorColor: "grey",
        doorName: "C",
      },
      {
        doorColor: "blue",
        doorName: "E",
      },
    ],
    roomKey: {
      haveKey: true,
      keyColor: "green",
    },
  },
  roomC: {
    doorToRoom: [
      {
        doorColor: "grey",
        doorName: "B",
      },
    ],
    roomKey: {
      haveKey: true,
      keyColor: "white",
    },
  },
  roomD: {
    doorToRoom: [
      {
        doorColor: "green",
        doorName: "A",
      },
    ],
    roomKey: {
      haveKey: true,
      keyColor: "blue",
    },
  },
  roomE: {
    doorToRoom: [
      {
        doorColor: "blue",
        doorName: "B",
      },
      {
        doorColor: "white",
        doorName: "F",
      },
    ],
    roomKey: {
      haveKey: true,
      keyColor: "grey",
    },
  },
  roomF: {
    doorToRoom: [
      {
        doorColor: "white",
        doorName: "E",
      },
    ],
    roomKey: {
      haveKey: false,
      keyColor: "",
    },
  },
};

/*
Hvilke rom?
Hvilke dører?
Nøkkel i rommet?

*/
