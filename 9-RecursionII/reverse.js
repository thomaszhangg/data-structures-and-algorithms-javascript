// Reverse the string recursively

function reverse(string) {
    if (string.length === 0) return ""
    return reverse(string.slice(1)) + string[0]
}


// Test
console.log("This should output 'emosewa':", reverse('awesome'))
console.log("This should output 'loohcsmhtir':", reverse('rithmschool'))


// reverse(awesome)
//     reverse(wesome) + a            emosewa
//         reverse(esome) + w            emosew
//             reverse(some) + e           emose
//                 reverse(ome) + s          emos
//                     reverse(me) + o         emo
//                         reverse(e) + m        em
//                             reverse('') + e    "" + e
                                