class WordleGame {
    constructor() {
        this.words = [
            'ABOUT', 'ABOVE', 'ABUSE', 'ACTOR', 'ACUTE', 'ADMIT', 'ADOPT', 'ADULT', 'AFTER', 'AGAIN',
            'AGENT', 'AGREE', 'AHEAD', 'ALARM', 'ALBUM', 'ALERT', 'ALIEN', 'ALIGN', 'ALIKE', 'ALIVE',
            'ALLOW', 'ALONE', 'ALONG', 'ALTER', 'AMBER', 'AMONG', 'ANGER', 'ANGLE', 'ANGRY', 'APART',
            'APPLE', 'APPLY', 'ARENA', 'ARGUE', 'ARISE', 'ARRAY', 'ASIDE', 'ASSET', 'AUDIO', 'AUDIT',
            'AVOID', 'AWAKE', 'AWARD', 'AWARE', 'BADLY', 'BAKER', 'BASES', 'BASIC', 'BEACH', 'BEGAN',
            'BEGIN', 'BEING', 'BELOW', 'BENCH', 'BILLY', 'BIRTH', 'BLACK', 'BLAME', 'BLANK', 'BLIND',
            'BLOCK', 'BLOOD', 'BOARD', 'BOOST', 'BOOTH', 'BOUND', 'BRAIN', 'BRAND', 'BRASS', 'BRAVE',
            'BREAD', 'BREAK', 'BREED', 'BRIEF', 'BRING', 'BROAD', 'BROKE', 'BROWN', 'BUILD', 'BUILT',
            'BUYER', 'CABLE', 'CALIF', 'CARRY', 'CATCH', 'CAUSE', 'CHAIN', 'CHAIR', 'CHAOS', 'CHARM',
            'CHART', 'CHASE', 'CHEAP', 'CHECK', 'CHEST', 'CHIEF', 'CHILD', 'CHINA', 'CHOSE', 'CIVIC',
            'CIVIL', 'CLAIM', 'CLASS', 'CLEAN', 'CLEAR', 'CLICK', 'CLIMB', 'CLOCK', 'CLOSE', 'CLOUD',
            'COACH', 'COAST', 'COULD', 'COUNT', 'COURT', 'COVER', 'CRAFT', 'CRASH', 'CRAZY', 'CREAM',
            'CRIME', 'CROSS', 'CROWD', 'CROWN', 'CRUDE', 'CURVE', 'CYCLE', 'DAILY', 'DANCE', 'DATED',
            'DEALT', 'DEATH', 'DEBUT', 'DELAY', 'DEPTH', 'DOING', 'DOUBT', 'DOZEN', 'DRAFT', 'DRAMA',
            'DRANK', 'DRAWN', 'DREAM', 'DRESS', 'DRILL', 'DRINK', 'DRIVE', 'DROVE', 'DYING', 'EAGER',
            'EARLY', 'EARTH', 'EIGHT', 'ELITE', 'EMPTY', 'ENEMY', 'ENJOY', 'ENTER', 'ENTRY', 'EQUAL',
            'ERROR', 'EVENT', 'EVERY', 'EXACT', 'EXIST', 'EXTRA', 'FAITH', 'FALSE', 'FAULT', 'FIBER',
            'FIELD', 'FIFTH', 'FIFTY', 'FIGHT', 'FINAL', 'FIRST', 'FIXED', 'FLASH', 'FLEET', 'FLOOR',
            'FLUID', 'FOCUS', 'FORCE', 'FORTH', 'FORTY', 'FORUM', 'FOUND', 'FRAME', 'FRANK', 'FRAUD',
            'FRESH', 'FRONT', 'FRUIT', 'FULLY', 'FUNNY', 'GIANT', 'GIVEN', 'GLASS', 'GLOBE', 'GOING',
            'GRACE', 'GRADE', 'GRAND', 'GRANT', 'GRASS', 'GRAVE', 'GREAT', 'GREEN', 'GROSS', 'GROUP',
            'GROWN', 'GUARD', 'GUESS', 'GUEST', 'GUIDE', 'HAPPY', 'HARRY', 'HEART', 'HEAVY', 'HENCE',
            'HENRY', 'HORSE', 'HOTEL', 'HOUSE', 'HUMAN', 'IDEAL', 'IMAGE', 'INDEX', 'INNER', 'INPUT',
            'ISSUE', 'JAPAN', 'JIMMY', 'JOINT', 'JONES', 'JUDGE', 'KNOWN', 'LABEL', 'LARGE', 'LASER',
            'LATER', 'LAUGH', 'LAYER', 'LEARN', 'LEASE', 'LEAST', 'LEAVE', 'LEGAL', 'LEVEL', 'LEWIS',
            'LIGHT', 'LIMIT', 'LINKS', 'LIVES', 'LOCAL', 'LOOSE', 'LOWER', 'LUCKY', 'LUNCH', 'LYING',
            'MAGIC', 'MAJOR', 'MAKER', 'MARCH', 'MARIA', 'MATCH', 'MAYBE', 'MAYOR', 'MEANT', 'MEDIA',
            'METAL', 'MIGHT', 'MINOR', 'MINUS', 'MIXED', 'MODEL', 'MONEY', 'MONTH', 'MORAL', 'MOTOR',
            'MOUNT', 'MOUSE', 'MOUTH', 'MOVED', 'MOVIE', 'MUSIC', 'NEEDS', 'NEVER', 'NEWLY', 'NIGHT',
            'NOISE', 'NORTH', 'NOTED', 'NOVEL', 'NURSE', 'OCCUR', 'OCEAN', 'OFFER', 'OFTEN', 'ORDER',
            'OTHER', 'OUGHT', 'PAINT', 'PANEL', 'PAPER', 'PARTY', 'PEACE', 'PETER', 'PHASE', 'PHONE',
            'PHOTO', 'PIANO', 'PIECE', 'PILOT', 'PITCH', 'PLACE', 'PLAIN', 'PLANE', 'PLANT', 'PLATE',
            'POINT', 'POUND', 'POWER', 'PRESS', 'PRICE', 'PRIDE', 'PRIME', 'PRINT', 'PRIOR', 'PRIZE',
            'PROOF', 'PROUD', 'PROVE', 'QUEEN', 'QUICK', 'QUIET', 'QUITE', 'RADIO', 'RAISE', 'RANGE',
            'RAPID', 'RATIO', 'REACH', 'READY', 'REALM', 'REBEL', 'REFER', 'RELAX', 'REPAY', 'REPLY',
            'RIGHT', 'RIGID', 'RIVAL', 'RIVER', 'ROBIN', 'ROGER', 'ROMAN', 'ROUGH', 'ROUND', 'ROUTE',
            'ROYAL', 'RURAL', 'SCALE', 'SCENE', 'SCOPE', 'SCORE', 'SENSE', 'SERVE', 'SEVEN', 'SHALL',
            'SHAPE', 'SHARE', 'SHARP', 'SHEET', 'SHELF', 'SHELL', 'SHIFT', 'SHINE', 'SHIRT', 'SHOCK',
            'SHOOT', 'SHORT', 'SHOWN', 'SIDES', 'SIGHT', 'SILLY', 'SINCE', 'SIXTH', 'SIXTY', 'SIZED',
            'SKILL', 'SLEEP', 'SLIDE', 'SMALL', 'SMART', 'SMILE', 'SMITH', 'SMOKE', 'SOLID', 'SOLVE',
            'SORRY', 'SOUND', 'SOUTH', 'SPACE', 'SPARE', 'SPEAK', 'SPEED', 'SPEND', 'SPENT', 'SPLIT',
            'SPOKE', 'SPORT', 'STAFF', 'STAGE', 'STAKE', 'STAND', 'START', 'STATE', 'STEAM', 'STEEL',
            'STICK', 'STILL', 'STOCK', 'STONE', 'STOOD', 'STORE', 'STORM', 'STORY', 'STRIP', 'STUCK',
            'STUDY', 'STUFF', 'STYLE', 'SUGAR', 'SUITE', 'SUPER', 'SWEET', 'TABLE', 'TAKEN', 'TASTE',
            'TAXES', 'TEACH', 'TEETH', 'TERRY', 'TEXAS', 'THANK', 'THEFT', 'THEIR', 'THEME', 'THERE',
            'THESE', 'THICK', 'THING', 'THINK', 'THIRD', 'THOSE', 'THREE', 'THREW', 'THROW', 'THUMB',
            'TIGHT', 'TIRED', 'TITLE', 'TODAY', 'TOPIC', 'TOTAL', 'TOUCH', 'TOUGH', 'TOWER', 'TRACK',
            'TRADE', 'TRAIN', 'TREAT', 'TREND', 'TRIAL', 'TRIBE', 'TRICK', 'TRIED', 'TRIES', 'TRUCK',
            'TRULY', 'TRUNK', 'TRUST', 'TRUTH', 'TWICE', 'UNCLE', 'UNDER', 'UNDUE', 'UNION', 'UNITY',
            'UNTIL', 'UPPER', 'UPSET', 'URBAN', 'USAGE', 'USUAL', 'VALID', 'VALUE', 'VIDEO', 'VIRUS',
            'VISIT', 'VITAL', 'VOCAL', 'VOICE', 'WASTE', 'WATCH', 'WATER', 'WHEEL', 'WHERE', 'WHICH',
            'WHILE', 'WHITE', 'WHOLE', 'WHOSE', 'WOMAN', 'WOMEN', 'WORLD', 'WORRY', 'WORSE', 'WORST',
            'WORTH', 'WOULD', 'WRITE', 'WRONG', 'WROTE', 'YOUNG', 'YOUTH'
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
                
                // Improved touch/click handling
                const handleKeyPress = (e) => {
                    e.preventDefault();
                    this.handleKeyPress(key);
                };
                
                keyElement.addEventListener('click', handleKeyPress);
                keyElement.addEventListener('touchstart', handleKeyPress, { passive: false });
                
                // Prevent context menu on long press
                keyElement.addEventListener('contextmenu', (e) => e.preventDefault());
                
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
