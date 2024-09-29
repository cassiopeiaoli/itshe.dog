; CASSIOPEIA 
LDA #6    
STA $46
STA $0    ; create <h1>
LDA #10   ; string length
STA $46
LDA #99   ; "c"
STA $47
LDA #97   ; "a"
STA $48
LDA #115  ; "s"
STA $49
STA $4A
LDA #105  ; "i"
STA $4B
LDA #111  ; "o"
STA $4C
LDA #112  ; "p"
STA $4D
LDA #101  ; "e"
STA $4E
LDA $4B   ; "i"
STA $4F
LDA $48   ; "a"
STA $50
STA $1    ; put the string in <h1>
STA $3    ; move up in DOM
LDA #5
STA $46   
STA $0    ; create <div>
LDA #2
STA $46

; it/she

STA $0    ; create <i>
LDA #6    ; load it/she from shared memory ; 105 116 47 115 104 101 
STA $46
LDA $4B   ; "i"
STA $47
LDA #116  ; "t"
STA $48
LDA #47   ; "/"
STA $49
LDA #115  ; "s"
STA $4A
LDA #104  ; "h"
STA $4B
LDA $4E   ; "e"
STA $4C
STA $1    ; put it/she in between <i>
STA $3    ; move up in DOM
STA $3    ; move up in DOM
LDA #0
STA $46

; Description

STA $0    ; create <p>
LDA $32   ; load string from shared memory
STA $1    ; put the string in <p>
STA $3    ; move up in DOM
LDA #0
STA $46
STA $0    ; create <p>
LDA $33   ; load string from shared memory
STA $1    ; put the string in <p>

; CREATE LINKS

; github
STA $3    ; move up in DOM
LDA #5
STA $46
STA $0    ; create <div>
LDA #12
STA $46
STA $0    ; create <a>
LDA $34   ; load "github" from shared memory
STA $1    ; put string in <a>
LDA #1    
STA $46
LDA $35   ; load link to github
STA $9    ; add link

; fedi
STA $3    ; move up in DOM
LDA #12
STA $46
STA $0    ; create <a>
LDA $36   ; load "fedi" from shared memory
STA $1    ; put string in <a>
LDA #1    
STA $46
LDA $37   ; load link to fedi
STA $9    ; add link

; mail
STA $3    ; move up in DOM
LDA #12
STA $46
STA $0    ; create <a>
LDA $38   ; load "mail" from shared memory
STA $1    ; put string in <a>
LDA #1    
STA $46
LDA $39   ; load mail
STA $9    ; add mail