class WordleGame {
    constructor() {
        this.words = [
            'ABOUT', 'ABOVE', 'AFTER', 'AGAIN', 'ALERT', 'ALIEN', 'ALONE', 'ANGER', 'ANGRY', 'APPLE',
            'BEACH', 'BEARD', 'BEAST', 'BENCH', 'BERRY', 'BIRTH', 'BLACK', 'BLADE', 'BLANK', 'BLAST',
            'CHAIR', 'CHAIN', 'CHAOS', 'CHARM', 'CHEAP', 'CHEST', 'CHIEF', 'CHILD', 'CHINA', 'CHOIR',
            'DAILY', 'DANCE', 'DATED', 'DEATH', 'DELAY', 'DEPTH', 'DIRTY', 'DOZEN', 'DRAFT', 'DRAMA',
            'EARLY', 'EARTH', 'EIGHT', 'EMPTY', 'ENEMY', 'ENTRY', 'EQUAL', 'ERROR', 'EVENT', 'EVERY',
            'FAITH', 'FALSE', 'FANCY', 'FATAL', 'FAULT', 'FIBER', 'FIELD', 'FIGHT', 'FINAL', 'FIRST',
            'GHOST', 'GIANT', 'GIVEN', 'GLASS', 'GLOBE', 'GLORY', 'GRACE', 'GRADE', 'GRAIN', 'GRAND',
            'HABIT', 'HAPPY', 'HARSH', 'HEART', 'HEAVY', 'HORSE', 'HOTEL', 'HOUSE', 'HUMAN', 'HUMOR',
            'IMAGE', 'INDEX', 'INNER', 'INPUT', 'ISSUE', 'ITEMS', 'JUDGE', 'JUICE', 'KNIFE', 'KNOCK',
            'LABEL', 'LARGE', 'LASER', 'LAUGH', 'LAYER', 'LEARN', 'LEAST', 'LEAVE', 'LEGAL', 'LEVEL',
            'MAGIC', 'MAJOR', 'MAKER', 'MARCH', 'MATCH', 'MAYBE', 'MEANT', 'MEDIA', 'METAL', 'MIGHT',
            'NIGHT', 'NOISE', 'NORTH', 'NOVEL', 'NURSE', 'OCEAN', 'OFFER', 'OFTEN', 'ORDER', 'OTHER',
            'PAINT', 'PANEL', 'PAPER', 'PARTY', 'PEACE', 'PHONE', 'PHOTO', 'PIECE', 'PILOT', 'PITCH',
            'PLACE', 'PLAIN', 'PLANE', 'PLANT', 'PLATE', 'POINT', 'POUND', 'POWER', 'PRESS', 'PRICE',
            'QUICK', 'QUIET', 'QUITE', 'RADIO', 'RAISE', 'RANGE', 'RAPID', 'RATIO', 'REACH', 'READY',
            'ROBOT', 'ROUGH', 'ROUND', 'ROUTE', 'ROYAL', 'RURAL', 'SCALE', 'SCENE', 'SCOPE', 'SCORE',
            'SENSE', 'SERVE', 'SEVEN', 'SHALL', 'SHAPE', 'SHARE', 'SHARP', 'SHEET', 'SHELF', 'SHELL',
            'SHIFT', 'SHINE', 'SHIRT', 'SHOCK', 'SHOOT', 'SHORT', 'SHOWN', 'SIGHT', 'SILLY', 'SINCE',
            'SKILL', 'SLEEP', 'SLIDE', 'SMALL', 'SMART', 'SMILE', 'SMOKE', 'SNAKE', 'SOLID', 'SOLVE',
            'SORRY', 'SOUND', 'SOUTH', 'SPACE', 'SPARE', 'SPEAK', 'SPEED', 'SPEND', 'SPENT', 'SPLIT',
            'SPOKE', 'SPORT', 'SQUAD', 'STAFF', 'STAGE', 'STAKE', 'STAND', 'START', 'STATE', 'STEAM',
            'STEEL', 'STICK', 'STILL', 'STOCK', 'STONE', 'STOOD', 'STORE', 'STORM', 'STORY', 'STRIP',
            'STUCK', 'STUDY', 'STUFF', 'STYLE', 'SUGAR', 'SUITE', 'SUPER', 'SWEET', 'TABLE', 'TAKEN',
            'TASTE', 'TAXES', 'TEACH', 'THANK', 'THEIR', 'THEME', 'THERE', 'THESE', 'THICK', 'THING',
            'THINK', 'THIRD', 'THOSE', 'THREE', 'THREW', 'THROW', 'THUMB', 'TIGHT', 'TIMES', 'TIRED',
            'TITLE', 'TODAY', 'TOOLS', 'TOTAL', 'TOUCH', 'TOUGH', 'TOWER', 'TRACK', 'TRADE', 'TRAIN',
            'TREAT', 'TREND', 'TRIAL', 'TRIBE', 'TRICK', 'TRIED', 'TRIES', 'TRIP', 'TRUCK', 'TRULY',
            'TRUST', 'TRUTH', 'TWICE', 'UNCLE', 'UNDER', 'UNDUE', 'UNION', 'UNITY', 'UNTIL', 'UPPER',
            'UPSET', 'URBAN', 'USAGE', 'USUAL', 'VALUE', 'VIDEO', 'VIRUS', 'VISIT', 'VITAL', 'VOCAL',
            'WASTE', 'WATCH', 'WATER', 'WAVES', 'WEARY', 'WEIRD', 'WHEEL', 'WHERE', 'WHICH', 'WHILE',
            'WHITE', 'WHOLE', 'WHOSE', 'WOMAN', 'WORLD', 'WORRY', 'WORSE', 'WORST', 'WORTH', 'WOULD',
            'WRITE', 'WRONG', 'WROTE', 'YOUNG', 'YOUTH'
        ];
        
        this.currentWord = this.getRandomWord();
        this.currentGuess = '';
        this.guesses = [];
        this.currentRow = 0;
        this.gameEnded = false;
        
        this.initializeGame();
        this.setupEventListeners();
    }
    
    getRandomWord() {
        return this.words[Math.floor(Math.random() * this.words.length)];
    }
    
    initializeGame() {
        this.createGrid();
        this.createKeyboard();
    }
    
    createGrid() {
        const grid = document.getElementById('grid');
        for (let i = 0; i < 6; i++) {
            const row = document.createElement('div');
            row.className = 'row';
            for (let j = 0; j < 5; j++) {
                const tile = document.createElement('div');
                tile.className = 'tile';
                tile.id = `tile-${i}-${j}`;
                row.appendChild(tile);
            }
            grid.appendChild(row);
        }
    }
    
    createKeyboard() {
        const keyboard = document.getElementById('keyboard');
        const rows = [
            ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
            ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
            ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE']
        ];
        
        rows.forEach(row => {
            const keyboardRow = document.createElement('div');
            keyboardRow.className = 'keyboard-row';
            
            row.forEach(key => {
                const keyElement = document.createElement('button');
                keyElement.className = 'key';
                keyElement.textContent = key === 'BACKSPACE' ? '⌫' : key;
                
                if (key === 'ENTER' || key === 'BACKSPACE') {
                    keyElement.classList.add('wide');
                }
                
                keyElement.addEventListener('click', () => this.handleKeyPress(key));
                keyboardRow.appendChild(keyElement);
            });
            
            keyboard.appendChild(keyboardRow);
        });
    }
    
    setupEventListeners() {
        document.addEventListener('keydown', (e) => {
            const key = e.key.toUpperCase();
            if (key === 'ENTER') {
                this.handleKeyPress('ENTER');
            } else if (key === 'BACKSPACE') {
                this.handleKeyPress('BACKSPACE');
            } else if (key.length === 1 && key >= 'A' && key <= 'Z') {
                this.handleKeyPress(key);
            }
        });
        
        // Modal event listeners
        document.getElementById('closeModal').addEventListener('click', () => {
            document.getElementById('modal').style.display = 'none';
        });
        
        document.getElementById('playAgain').addEventListener('click', () => {
            this.resetGame();
            document.getElementById('modal').style.display = 'none';
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            const modal = document.getElementById('modal');
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    
    handleKeyPress(key) {
        if (this.gameEnded) return;
        
        if (key === 'ENTER') {
            this.submitGuess();
        } else if (key === 'BACKSPACE') {
            this.deleteLetter();
        } else if (this.currentGuess.length < 5) {
            this.addLetter(key);
        }
    }
    
    addLetter(letter) {
        if (this.currentGuess.length < 5) {
            this.currentGuess += letter;
            this.updateDisplay();
        }
    }
    
    deleteLetter() {
        if (this.currentGuess.length > 0) {
            this.currentGuess = this.currentGuess.slice(0, -1);
            this.updateDisplay();
        }
    }
    
    updateDisplay() {
        for (let i = 0; i < 5; i++) {
            const tile = document.getElementById(`tile-${this.currentRow}-${i}`);
            if (i < this.currentGuess.length) {
                tile.textContent = this.currentGuess[i];
                tile.classList.add('filled');
            } else {
                tile.textContent = '';
                tile.classList.remove('filled');
            }
        }
    }
    
    submitGuess() {
        if (this.currentGuess.length !== 5) {
            this.showMessage('Word must be 5 letters long!', 'error');
            return;
        }
        
        if (!this.isValidWord(this.currentGuess)) {
            this.showMessage('Not a valid word!', 'error');
            return;
        }
        
        this.guesses.push(this.currentGuess);
        this.evaluateGuess();
        
        if (this.currentGuess === this.currentWord) {
            this.endGame(true);
        } else if (this.guesses.length === 6) {
            this.endGame(false);
        } else {
            this.currentRow++;
            this.currentGuess = '';
        }
    }
    
    isValidWord(word) {
        // For simplicity, we'll accept any 5-letter word
        // In a real implementation, you'd check against a dictionary
        return word.length === 5 && /^[A-Z]+$/.test(word);
    }
    
    evaluateGuess() {
        const guess = this.currentGuess;
        const target = this.currentWord;
        const result = [];
        const targetLetters = target.split('');
        const guessLetters = guess.split('');
        
        // First pass: mark correct letters
        for (let i = 0; i < 5; i++) {
            if (guessLetters[i] === targetLetters[i]) {
                result[i] = 'correct';
                targetLetters[i] = null;
                guessLetters[i] = null;
            }
        }
        
        // Second pass: mark present letters
        for (let i = 0; i < 5; i++) {
            if (guessLetters[i] !== null) {
                const targetIndex = targetLetters.indexOf(guessLetters[i]);
                if (targetIndex !== -1) {
                    result[i] = 'present';
                    targetLetters[targetIndex] = null;
                } else {
                    result[i] = 'absent';
                }
            }
        }
        
        // Update tiles
        for (let i = 0; i < 5; i++) {
            const tile = document.getElementById(`tile-${this.currentRow}-${i}`);
            tile.classList.add(result[i]);
        }
        
        // Update keyboard
        for (let i = 0; i < 5; i++) {
            this.updateKeyboard(guess[i], result[i]);
        }
    }
    
    updateKeyboard(letter, status) {
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => {
            if (key.textContent === letter) {
                // Only update if the new status is better than current
                if (!key.classList.contains('correct') && 
                    (status === 'correct' || (status === 'present' && !key.classList.contains('present')))) {
                    key.classList.remove('present', 'absent');
                    key.classList.add(status);
                } else if (!key.classList.contains('correct') && !key.classList.contains('present') && status === 'absent') {
                    key.classList.add('absent');
                }
            }
        });
    }
    
    showMessage(text, type = '') {
        const messageElement = document.getElementById('message');
        messageElement.textContent = text;
        messageElement.className = `message ${type}`;
        
        setTimeout(() => {
            messageElement.textContent = '';
            messageElement.className = 'message';
        }, 3000);
    }
    
    async endGame(won) {
        this.gameEnded = true;
        const modal = document.getElementById('modal');
        const title = document.getElementById('modalTitle');
        const message = document.getElementById('modalMessage');
        
        if (won) {
            title.textContent = 'Congratulations! 🎉';
            message.textContent = `You guessed the word in ${this.guesses.length} tries!`;
        } else {
            title.textContent = 'Game Over 😞';
            message.textContent = `The word was: ${this.currentWord}`;
        }
        
        // Show modal first
        modal.style.display = 'block';
        
        // Fetch and display word meaning
        await this.fetchWordMeaning();
    }
    
    async fetchWordMeaning() {
        const meaningElement = document.getElementById('wordMeaning');
        meaningElement.innerHTML = '<div class="loading"></div>';
        
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.currentWord.toLowerCase()}`);
            
            if (!response.ok) {
                throw new Error('Word not found in dictionary');
            }
            
            const data = await response.json();
            this.displayWordMeaning(data[0]);
        } catch (error) {
            console.error('Error fetching word meaning:', error);
            meaningElement.innerHTML = `
                <div class="definition">
                    <div class="definition-text">
                        Sorry, we couldn't find the meaning for "${this.currentWord}". 
                        This might be because it's a proper noun or not in our dictionary.
                    </div>
                </div>
            `;
        }
    }
    
    displayWordMeaning(wordData) {
        const meaningElement = document.getElementById('wordMeaning');
        let meaningHTML = '';
        
        if (wordData.meanings && wordData.meanings.length > 0) {
            wordData.meanings.forEach((meaning, index) => {
                if (index < 3) { // Limit to 3 meanings to avoid overcrowding
                    meaningHTML += `
                        <div class="definition">
                            <div class="part-of-speech">${meaning.partOfSpeech}</div>
                            <div class="definition-text">${meaning.definitions[0].definition}</div>
                            ${meaning.definitions[0].example ? 
                                `<div class="example">Example: "${meaning.definitions[0].example}"</div>` : 
                                ''}
                        </div>
                    `;
                }
            });
        }
        
        if (!meaningHTML) {
            meaningHTML = `
                <div class="definition">
                    <div class="definition-text">
                        Definition not available for this word.
                    </div>
                </div>
            `;
        }
        
        meaningElement.innerHTML = meaningHTML;
    }
    
    resetGame() {
        this.currentWord = this.getRandomWord();
        this.currentGuess = '';
        this.guesses = [];
        this.currentRow = 0;
        this.gameEnded = false;
        
        // Clear grid
        const tiles = document.querySelectorAll('.tile');
        tiles.forEach(tile => {
            tile.textContent = '';
            tile.className = 'tile';
        });
        
        // Clear keyboard colors
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => {
            key.classList.remove('correct', 'present', 'absent');
        });
        
        // Clear message
        document.getElementById('message').textContent = '';
        document.getElementById('message').className = 'message';
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new WordleGame();
});
