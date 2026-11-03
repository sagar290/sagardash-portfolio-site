import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const width = 1200;
const height = 630;

const fontRegular = readFileSync(join(root, "public/fonts/Inter-Regular.ttf"));
const fontBold = readFileSync(join(root, "public/fonts/Inter-Bold.ttf"));
const avatar = readFileSync(join(root, "public/avatar.png"));
const avatarDataUrl = `data:image/png;base64,${avatar.toString("base64")}`;

const svg = await satori(
  {
    type: "div",
    props: {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        background: "#070e1a",
        color: "#e8eef7",
        fontFamily: "Inter",
        overflow: "hidden",
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              width: "520px",
              height: "520px",
              borderRadius: "999px",
              background:
                "radial-gradient(circle, rgba(255,106,26,0.28) 0%, rgba(255,106,26,0.0) 70%)",
              top: "-80px",
              right: "-40px",
            },
          },
        },
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              width: "420px",
              height: "420px",
              borderRadius: "999px",
              background:
                "radial-gradient(circle, rgba(61,122,181,0.22) 0%, rgba(61,122,181,0) 70%)",
              bottom: "-120px",
              left: "-80px",
            },
          },
        },
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              width: "100%",
              height: "100%",
              padding: "64px 72px",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "48px",
            },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flex: 1,
                    maxWidth: "640px",
                  },
                  children: [
                    {
                      type: "div",
                      props: {
                        style: {
                          display: "flex",
                          fontSize: "28px",
                          fontWeight: 700,
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "#ff6a1a",
                          marginBottom: "18px",
                        },
                        children: "Portfolio",
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: {
                          display: "flex",
                          fontSize: "84px",
                          fontWeight: 800,
                          lineHeight: 1.02,
                          letterSpacing: "-0.04em",
                          color: "#ff6a1a",
                          marginBottom: "12px",
                        },
                        children: "Sagar Dash",
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: {
                          display: "flex",
                          fontSize: "42px",
                          fontWeight: 700,
                          lineHeight: 1.15,
                          letterSpacing: "-0.03em",
                          color: "#e8eef7",
                          marginBottom: "28px",
                        },
                        children: "Backend Architect",
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: {
                          display: "flex",
                          fontSize: "26px",
                          fontWeight: 500,
                          color: "#9aa8bd",
                          lineHeight: 1.4,
                          maxWidth: "560px",
                        },
                        children:
                          "APIs · Microservices · Distributed Systems · Cloud",
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: {
                          display: "flex",
                          marginTop: "36px",
                          alignItems: "center",
                          gap: "12px",
                        },
                        children: [
                          {
                            type: "div",
                            props: {
                              style: {
                                display: "flex",
                                width: "12px",
                                height: "12px",
                                borderRadius: "999px",
                                background: "#ff6a1a",
                              },
                            },
                          },
                          {
                            type: "div",
                            props: {
                              style: {
                                display: "flex",
                                fontSize: "22px",
                                fontWeight: 600,
                                color: "#c5d0e0",
                              },
                              children: "sagardash.me",
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    width: "320px",
                    height: "320px",
                    borderRadius: "999px",
                    padding: "8px",
                    background: "#ff6a1a",
                    flexShrink: 0,
                  },
                  children: [
                    {
                      type: "img",
                      props: {
                        src: avatarDataUrl,
                        width: 304,
                        height: 304,
                        style: {
                          width: "304px",
                          height: "304px",
                          borderRadius: "999px",
                          objectFit: "cover",
                          border: "6px solid #070e1a",
                        },
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
  {
    width,
    height,
    fonts: [
      { name: "Inter", data: fontRegular, weight: 500, style: "normal" },
      { name: "Inter", data: fontBold, weight: 700, style: "normal" },
      { name: "Inter", data: fontBold, weight: 800, style: "normal" },
    ],
  }
);

const resvg = new Resvg(svg, {
  fitTo: { mode: "width", value: width },
});
const png = resvg.render().asPng();
const outPath = join(root, "public/og-image.png");
writeFileSync(outPath, png);
console.log(`Wrote ${outPath} (${png.length} bytes)`);
