export default [
  {
    title: "Amazing Grace",
    artist: "John Newton",
    originalKey: "G",
    bpm: 60,
    sections: [
      {
        type: "Intro",
        lyrics: [""],
        chords: [[]],
      },
      {
        type: "Verse",
        lyrics: [
          "Amazing grace, how sweet the sound",
          "That saved a wretch like me",
        ],
        chords: [
          [{ chord: "G", position: 0 }, { chord: "C", position: 10 }],
          [{ chord: "G", position: 0 }, { chord: "D", position: 50 }],
        ],
      },
      {
        type: "Chorus",
        lyrics: [
          "I once was lost, but now am found",
          "Was blind, but now I see",
        ],
        chords: [
          [{ chord: "G", position: 0 }, { chord: "C", position: 50 }],
          [{ chord: "G", position: 0 }],
        ],
      },
    ],
  },
  {
    title: "How Great Thou Art",
    artist: "Carl Boberg",
    originalKey: "C",
    bpm: 72,
    sections: [
        {
            type: "Verse",
            lyrics: [
                "O Lord my God, when I in awesome wonder",
                "Consider all the works Thy hands have made",
            ],
            chords: [
                [{ chord: "C", position: 0 }, { chord: "G", position: 50 }],
                [{ chord: "C", position: 0 }, { chord: "F", position: 70 }],
            ],
        },
        {
            type: "Chorus",
            lyrics: [
                "Then sings my soul, my Savior God, to Thee",
                "How great Thou art, how great Thou art!",
            ],
            chords: [
                [{ chord: "F", position: 0 }, { chord: "C", position: 50 }],
                [{ chord: "G", position: 0 }, { chord: "C", position: 70 }],
            ],
        },
    ],
  },
  {
    title: "Grace Abounds",
    artist: "AWAKE84",
    originalKey: "E",
    bpm: 130,
    sections: [
          {
            type: "Intro",
            lyrics: ["","Are you ready...",""],
            italize: [false, true],
            addBreak: [false, true],
            chords: [
                [
                  { chord: "A", position: 0, left: true }, { chord: "C#m7", position: 4 }, { chord: "B", position: 4, right: true, dash: true },
                  { chord: "E", position: 8 }, { chord: "G#m7", position: 12 }, { chord: "A", position: 12, right: true, dash: true  },
                ],
                [],
                [
                  { chord: "A", position: 0, left: true }, { chord: "C#m7", position: 4 }, { chord: "B", position: 4, right: true, dash: true },
                  { chord: "E", position: 8 }, { chord: "G#m7", position: 12 }, { chord: "A", position: 12, right: true, dash: true  },
                ],
            ],
            times: [2, '', 4],
        },
        {
            type: "Verse 1",
            lyrics: [
                "In my weakness, You are strong",
                "When I feel I can’t press on",
                "You renew this weary heart",
                "You carry me through",
                "You carry me through",
            ],
            chords: [
                [{ chord: "G#m7", position: 25 }, { chord: "A", position: 40 }, { chord: "B", position: 70 }],
                [{ chord: "G#m7", position: 30 }, { chord: "A", position: 40 }, { chord: "B", position: 67 }],
                [{ chord: "G#m7", position: 28 }, { chord: "A", position: 42 }, { chord: "B", position: 60 }],
                [{ chord: "G#m7", position: 57 }],
                [{ chord: "A", position: 17 }, { chord: "B", position: 52 }],
            ],
        },
        {
          type: "Verse 2",
          lyrics: [
              "When the lies say I’m in need",
              "You remind me I’m complete",
              "For You always satisfy",
              "You fill me anew",
              "You fill me anew",
          ],
          chords: [
              [{ chord: "G#m7", position: 46 }, { chord: "A", position: 56 }, { chord: "B", position: 70 }],
              [{ chord: "G#m7", position: 28 }, { chord: "A", position: 40 }, { chord: "B", position: 68 }],
              [{ chord: "G#m7", position: 32 }, { chord: "A", position: 38 }, { chord: "B", position: 50 }],
              [{ chord: "G#m7", position: 49 }],
              [{ chord: "A", position: 18 }, { chord: "B", position: 44 }],
          ],
        },
        {
            type: "Chorus",
            lyrics: [
                "Your grace abounds",
                "It’s all around",
                "It knows no bounds",
                "Ooohh..      ooohh..",
            ],
            chords: [
                [{ chord: "A", position: 18 }, { chord: "E", position: 40 }],
                [{ chord: "C#m", position: 16 }, { chord: "B", position: 20 }],
                [{ chord: "A", position: 8 }, { chord: "E", position: 44 }],
                [{ chord: "C#m7", position: 27 }, { chord: "B", position: 56 }],
            ],
        },
        {
          type: "DROP:",
          lyrics: ['',''],
          chords: [
              [{ chord: "A", position: 0, left: true }, { chord: "E", position: 3, left: true }, { chord: "C#m", position: 5, left: true }, { chord: "B", position: 7, leftRight: true,  }],
              [{ chord: "A", position: 0, left: true }, { chord: "E", position: 3, left: true }, { chord: "C#m", position: 5, left: true }, { chord: "B", position: 7, leftRight: true,  }],

          ],
        },
        {
          type: "",
          lyrics: ['[VERSE 1]','[VERSE 2]','[CHORUS]'],
          chords: [],
        },
        {
          type: "INSTRUMENTAL:",
          lyrics: ['',''],
          chords: [
            [{ chord: "A", position: 0, left: true }, { chord: "E", position: 4, left: true }, { chord: "C#m7", position: 8, left: true }, { chord: "B", position: 12, leftRight: true }],
            [{ chord: "A", position: 0, left: true }, { chord: "E", position: 4, left: true }, { chord: "C#m7", position: 8, left: true }, { chord: "B", position: 12, leftRight: true }],
          ],
        },
        {
          type: "BRIDGE:",
          lyrics: [
                '',
                'A grace so bright, I’m brought to life',
                'I fix my eyes, You’re my delight',
                'A grace so bright, I’m brought to life',
                'I fix my eyes on You'
              ],
          chords: [
            [{ chord: "A", position: 0, left: true }, { chord: "C#m7", position: 4, right: true }, { chord: "B", position: 7, right: true }, { chord: "E", position: 11 }, { chord: "G#m7", position: 15 }, { chord: "A", position: 19, leftRight: true }],
            [{ chord: "A", position: 0 }, { chord: "C#m7", position: 60 }, { chord: "B", position: 60, dash: true }],
            [{ chord: "E", position: 0 }, { chord: "G#m7", position: 44 }, { chord: "A", position: 44, dash: true }],
            [{ chord: "A", position: 0 }, { chord: "C#m7", position: 60 }, { chord: "B", position: 60, dash: true }],
            [{ chord: "E", position: 33 }, { chord: "G#m7", position: 74 }, { chord: "B", position: 74, dash: true }],
          ],
          times: [2]
        },
        {
          type: "[REPEAT BRIDGE 2x]",
          lyrics: [''],
          chords: [],
        },
        {
          type: "BRIDGE TAG:",
          lyrics: ['I fix my eyes on You'],
          chords: [
            [{ chord: "A", position: 30 }, { chord: "C#m7", position: 60 }, { chord: "B", position: 60, dash: true }],
          ],
        },
        {
          type: "[REPEAT CHORUS]",
          lyrics: [
              "Your grace abounds",
              "It’s all around",
              "It knows no bounds",
              "Ooohh..      ooohh..",
          ],
          chords: [
              [{ chord: "A", position: 18 }, { chord: "E", position: 40 }],
              [{ chord: "C#m", position: 16 }, { chord: "B", position: 20 }],
              [{ chord: "A", position: 8 }, { chord: "E", position: 44 }],
              [{ chord: "C#m7", position: 27 }, { chord: "B", position: 56 }],
          ],
        },
        {
          type: "DROP:",
          lyrics: ['',''],
          chords: [
              [{ chord: "A", position: 0, left: true }, { chord: "E", position: 3, left: true }, { chord: "C#m", position: 5, left: true }, { chord: "B", position: 7, leftRight: true,  }],
              [{ chord: "A", position: 0, left: true }, { chord: "E", position: 3, left: true }, { chord: "C#m", position: 5, left: true }, { chord: "B", position: 7, leftRight: true,  }],

          ],
        },
    ],
  },
]
