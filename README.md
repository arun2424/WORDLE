# Wordle Clone

A modern, fully-featured Wordle clone built with HTML, CSS, and JavaScript. This version includes the classic Wordle gameplay with an additional feature that displays the meaning of the word at the end of each game.

## Features

- **Classic Wordle Gameplay**: Guess a 5-letter word in 6 tries
- **Visual Feedback**: Color-coded tiles showing correct, present, and absent letters
- **Interactive Keyboard**: On-screen keyboard with letter status tracking
- **Word Meanings**: Displays detailed word definitions, parts of speech, and examples after each game
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Dark theme with smooth animations and transitions

## How to Play

1. Open `index.html` in your web browser
2. Type a 5-letter word using your keyboard or the on-screen keyboard
3. Press Enter to submit your guess
4. Use the color feedback to guide your next guesses:
   - 🟩 Green: Letter is correct and in the right position
   - 🟨 Yellow: Letter is in the word but in the wrong position
   - ⬛ Gray: Letter is not in the word
5. Win by guessing the word in 6 tries or less
6. After the game ends, see the word's meaning and definitions

## Files

- `index.html` - Main HTML structure
- `style.css` - Styling and animations
- `script.js` - Game logic and word meaning integration

## API Integration

The game uses the [Dictionary API](https://dictionaryapi.dev/) to fetch word meanings, definitions, and examples. The API provides:
- Part of speech information
- Multiple definitions
- Usage examples
- Pronunciation data

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Installation

1. Download or clone all files to a folder
2. Open `index.html` in your web browser
3. Start playing!

No server or additional setup required - it's a client-side application.

## Live Demo

🎮 **[Play the Game Live]https://arun2424.github.io/WORDLE/** 

## Deployment

This game is deployed using GitHub Pages. To deploy your own version:
1. Fork this repository
2. Go to Settings → Pages
3. Deploy from main branch
4. Your game will be live at `https://yourusername.github.io/repository-name`

## Customization

You can easily customize the game by:
- Adding more words to the `words` array in `script.js`
- Changing colors in `style.css`
- Modifying the word length (requires updates to grid and logic)
- Adding difficulty levels

## Note

Enjoy playing Wordle! 🎯
](https://arun2424.github.io/WORDLE/)
