package main

import "fmt"

var hashchar string = "abcdef0123456789"

func replaceAtIndex(in string, r rune, i int) string {
    out := []rune(in)
    out[i] = r
    return string(out)
}

func hash_str(s string) uint {
	var h uint = 37
	for i := 0; i < len(s); i++ {
		h = (h * 7919) ^ (uint(s[i]) * 104561) | 94399
	}
	
	return h % 95873
}


func getkey(){
	//bsb17_6a3a787f3efb1d04c62df3dfa717c34b
	  
	var key_test string = "bsb17_653774723aff1d04c62df3dfa717c34b"
	
	for i := 0; i < 16; i++ {
		for j := 0; j < 16; j++ {
			for k := 0; k < 16; k++ {
				for l := 0; l < 16; l++ {
					for m := 0; m < 16; m++ {
						for n := 0; n < 16; n++ {
							var test string = key_test[:7] + string(hashchar[i]) + string(key_test[8]) + string(hashchar[j]) + string(key_test[10]) + string(hashchar[k]) + string(key_test[12]) + string(hashchar[l]) + string(key_test[14]) + string(hashchar[m]) + string(key_test[16]) + string(hashchar[n]) + key_test[18:]
							
							if hash_str(test) == 45143 {
								fmt.Printf("If we get to this point, we have our key.\n");
								return;
							}
						}
					}
				}
			}
		}
	}
}

func main () { 
	getkey()
}