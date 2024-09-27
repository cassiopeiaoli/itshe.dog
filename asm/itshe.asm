LDA #6    
STA $46
STA $0    ; create <h1>
LDA #10   ; load string from shared memory
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
STA $3
STA $3


