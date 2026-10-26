## Jeopardy Game

Edit `questions.js` in the same format as `example-questions.js` and point `jeopardy.html` at it.
Run `open jeopardy.html`. 
Edit the configuration to your liking.
Set up the audience view and screen share it with your friend(s).
Buzz functionality is not included here, you need an external tool for that.
Have fun!

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
