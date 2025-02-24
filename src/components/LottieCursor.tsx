import Lottie from "lottie-react";

const cursorAnimation = {
  v: "5.7.8",
  fr: 60,
  ip: 0,
  op: 60,
  w: 800,
  h: 800,
  nm: "Cursor",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Cursor",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [400, 400, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 0,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-100, -100],
                          [100, 100],
                        ],
                        c: false,
                      },
                    ],
                  },
                  {
                    t: 59,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-100, -100],
                          [100, 100],
                        ],
                        c: false,
                      },
                    ],
                  },
                ],
                ix: 2,
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: false,
            },
            {
              ty: "st",
              c: { a: 0, k: [0, 0, 0], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 20, ix: 5 },
              lc: 2,
              lj: 2,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: false,
            },
          ],
          nm: "Shape 1",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 60,
      st: 0,
      bm: 0,
    },
  ],
};

const LottieCursor = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Lottie
        animationData={cursorAnimation}
        loop={true}
        autoplay={true}
        className="w-full h-full"
      />
    </div>
  );
};

export default LottieCursor;
