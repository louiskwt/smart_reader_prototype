const correctAns = [
                    'rare', 
                    'simple', 
                    'majority', 
                    'b', 
                    'format', 
                    'screen',
                    'indicator',
                    'press',
                    'crosses',
                    'basic',
                    'complex',
                    'hold',
                    'slide',
                    'flick',
                    'ng',
                    'f',
                    't',
                    't',
                    'f',
                    'b',
                    'd',
                    'c'
                        ];
const totalScore = correctAns.length;  // using arr.length to get the total score

const form = document.querySelector('#answer-form');
const scoreSection = document.querySelector('.score-section');
const result = document.querySelector('.score');
const progressBar = document.querySelector('.bar');
const progressPercentage = document.querySelector('.percent');

form.addEventListener('submit', e => {
    e.preventDefault();

    // initialise the score and percentile
    let score = 0;
    let percentageScore = 0;

    // capture the userAnswers using an array
    const userAnswers = [
                            form.q1.value, form.q2.value, form.q3.value, form.q4.value,
                            form.q5.value, form.q6.value, form.q7.value, form.q8.value,
                            form.q9.value, form.q10.value, form.q11.value, form.q12.value,
                            form.q13.value, form.q14.value, form.q15.value, form.q16.value,
                            form.q17.value, form.q18.value, form.q19.value, form.q20.value,
                            form.q21.value, form.q22.value
                        ];
    // Check answers and calculate the score

    userAnswers.forEach((answer, index) => {
        if(answer.toLowerCase() === correctAns[index])  // comparing the score angainst the correctAns
        {
            score += 1;
        }
    });

    // calculate the percentage score
    percentageScore = Math.round(score / totalScore * 100);  // use round to make sure the percentage is an integer; otherwise the progress bar animation will not work properly

    // Display score
    scrollTo(0,0);
    scoreSection.classList.remove('hidden');


    // Animate the score display
    let displayedScore = 0; // the animated version of the score

    // show the increasing score every 0.05 second
    const timer = setInterval(() => {
        result.innerHTML = `<h1>Your score is: ${displayedScore} / ${totalScore}</h1>`;
        if(displayedScore === score) {
            clearInterval(timer);
        } else {
            displayedScore++;
        }
    }, 50);

    // show the increasing progress bar every 0.05 second
    let displayedPercentage = 0;
    let width = 0;
    const timer2 = setInterval(() => {
        progressBar.style.width = `${width}%`;
        progressPercentage.textContent = `${displayedPercentage}%`;
        if(displayedPercentage === percentageScore) {
            clearInterval(timer2);
        } else {
            displayedPercentage++
            width++
        }
    }, 50);
});