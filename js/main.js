const texts = [
`
sick and broken with a smile on my face
surviving every day somehow
i know you wanna be the victim again
even as you break my mind down

bury yourself
you've made your own hell, live in it
bury yourself
you've made your own hell

bury yourself
you've made your own hell, live in it
bury yourself
you've made your own hell

you can make me question everything real
you can act like its complicated
put your words in my mouth but ill never allow
your world to get back in my head

when i left you said that it was you who did
i won't let you take my agency again

on my own, no home
i'm broken open
but i know i won't
ever allow this
ever again

bury yourself (bury yourself)
you've made your own hell, live in it
bury yourself (bury yourself)
you've made your own hell, live in it

you know
you know me
you know what you did to me
you know
you know me
you know what you did

you know
you know me
you know what you did to me
you know
you know me
you know what you did

bury yourself
you've made your own hell, live in it
live in it
live in it
never again
`,
`
laughing, lost, too gone to be stopped
take my heart, take my mind, take my sympathetic thoughts
wanna fuck me up? wanna call it love?
you can do what you want cuz i know what im not
laughing, lost, too gone to be stopped
im giving my best life everything i got
wanna fuck me up? wanna call it love?
you can do what you want cuz i know what im not

i dont care and i am finally at peace
im still running but now nothing frightens me

i dont care and i am so fucking at peace
everywhere there's people i don't need to be

rat kid swag 2025
lets fucking go bitch

laughing, lost, too gone to be stopped
take my heart, take my mind, take my sympathetic thoughts
wanna fuck me up? wanna call it love?
you can do what you want cuz i know what im not
laughing, lost, too gone to be stopped
im giving my best life everything i got
wanna fuck me up? wanna call it love?
you can do what you want cuz i know what im not

i don't care and i am finally at peace
everywhere there's people i don't need to be
im still running but now nothing frightens me
in a rictus of blissfulness i'm free
`,
`
You didn't have to look my way
Your eyes still haunt me to this day
But you did. Yes, you did

You didn't have to say my name
Ignite my circuits and start a flame
But you did

Oh, Turpentine erase me whole
(Cause I) don't want to live my life alone
(Well I) was waiting for you all my life
Oh
Why

Set me free, my...honey-
Bee
Ho-ney
Bee

You didn't have to smile at me
Your grin's the sweetest that I've ever seen
But you did. Yes you did

You didn't have to offer your hand
Cause since I've kissed it I am at your command
But you did

Oh, Turpentine erase me whole
I don't want to live my life alone
I was waiting for you all my life
Oh
Why

Set me free, my...honey-
Bee
Ho-ney
Bee

Hello Goodbye, Twas nice to know you
How I find myself without you
That I'll never know
I let myself go

Hello Goodbye, I'm rather crazy
And I never thought I was crazy
But what do I know?
Now you have to go

Honeybee
Honeybee

Hello Goodbye, Twas nice to know you
How I find myself without you
Hello Goodbye, I'm rather crazy
And I never thought I was crazy

That I'll never know.
I let myself go.
But what do I know?
Now you have to go.
`,
`
The MOS Technology 6502 (typically pronounced "sixty-five-oh-two" or "six-five-oh-two")[3] is an 8-bit microprocessor that was designed by a small team led by Chuck Peddle for MOS Technology. The design team had formerly worked at Motorola on the Motorola 6800 project; the 6502 is essentially a simplified, less expensive and faster version of that design.
`,
`
No More Worlds Like This, No More Days Like That
`,
]
const check = 120;

class BackgroundAnimation {
    
    convertedTexts = [];
    background = document.querySelector('.background-text');
    iterations = 0;

    constructor() {
        texts.forEach((text, index) => {
            this.convertedTexts[index] = [];
            for (let i = 0; i < text.length; i++) {
                const character = `0x${text.charCodeAt(i).toString(16)}`
                this.convertedTexts[index] += character + " ";
            }
        });
        this.background.textContent = this.convertedTexts[0]; 
    }

    render() {
        if (this.iterations > check) {
            this.iterations = 0;
            this.background.textContent = this.convertedTexts[Math.floor(Math.random() * this.convertedTexts.length)];
        }
        this.iterations++;
        window.requestAnimationFrame(() => this.render());
    }
}

new BackgroundAnimation().render();
