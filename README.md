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
