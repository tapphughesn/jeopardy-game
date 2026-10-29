## Jeopardy Game

Edit `questions.js` in the same format as `example-questions.js` and point `jeopardy.html` at it.
Open `jeopardy.html` directly for the standard game without automatic buzzer integration.
Edit the configuration to your liking.
Set up the audience view and screen share it with your friend(s).
Have fun!

### Optional BuzzIn.live integration

Automatic clue hiding is optional. The game works normally when `jeopardy.html` is
opened directly.

For automatic hiding, install the local dependencies once:

```bash
npm install
```

Then start the game with:

```bash
npm start
```

This launches a temporary dedicated Chrome session with the Jeopardy host. Click **Open
BuzzIn host** in the Jeopardy toolbar when you are ready; the helper automatically
detects the new tab and begins monitoring it. Keep the terminal running during the game.
When the first player buzzes, only the audience clue is hidden. Clicking BuzzIn's
clear/reset control restores the clue so other players can buzz. Daily Doubles,
Final Jeopardy, the board, and the host's clue are never hidden. If the helper
disconnects, the clue is restored and remains visible.

The temporary browser session closes when you stop the helper and does not modify
your normal Chrome profile. If Chrome is installed somewhere unusual, set
`CHROME_PATH` to its executable before running `npm start`.

Run the local automated tests with:

```bash
npm test
```

The opt-in smoke test against the real BuzzIn.live service is:

```bash
npm run test:real-buzzin
```

That external test may need updating if BuzzIn changes its interface; the normal
test suite uses a local BuzzIn fixture and does not contact the service.

### Audio clues

Put downloaded audio files in `assets/`, then add an `audio` property to any clue in
`questions.js`:

```js
{
  "clue": "Name this song.",
  "audio": "assets/name-that-song.mp3",
  "answer": "What is ...?",
  "value": 300
}
```

The clue text is optional when `audio` is present. Opening the clue displays the
browser's play/pause controls in both the host and audience views. Audio does not
autoplay, and playback stops when the host returns to the board.

MP3 is the safest format across current browsers. OGG and WAV support depends on
the browser. Only use audio you have permission to download and play.

### Image clues

Put image files in `assets/`, then add an `image` property to a clue. The clue
text is optional when an image is present:

```js
{
  "image": "assets/landmarks/eiffel-tower.jpg",
  "imageAlt": "A tall iron lattice tower viewed from across a river",
  "answer": "What is the Eiffel Tower?",
  "value": 400
}
```

`imageAlt` is optional but recommended for accessibility. Images are scaled to
fit the clue window without cropping and appear in both host and audience views.
Text, `image`, and `audio` can also be combined in the same clue.
