var imagemin = require("imagemin"),
  webp = require("imagemin-webp");

const quality = Number(process.argv[2]);

imagemin(["images/*.{jpg,png}"], {
  destination: "webp",
  plugins: [
    webp({
      ...(Boolean(quality) && { quality }),
      ...(!quality && { lossless: true }),
    }),
  ],
});
