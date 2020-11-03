const { expect } = require('@jest/globals');
const { describe } = require('yargs');
const enhancer = require('./enhancer.js');
// test away!


// Items.
// Items have name, durability and enhancement.
//--should like like (name, durability, enhancement)
// --or name(durability, enhancement) when called
// -- name(0-100, 0-20)
// The item's enhancement it's a number from 0 to 20.
// The item's durability it's a number from 0 to 100.

// When enhancement succeeds
// The item's enhancement increases by 1.
// -- ((when succeds)+1)
// If the item enhancement level is 20, the
// enhancement level is not changed.
// -- ((e <= 20))
// The durability of the item is not changed.


// When enhancement fails
// If the item's enhancement is less than 15, 
// the durability of the item is decreased 
// by 5.
// -- (e >= 15){
//  (d - 5)
//}
// If the item's enhancement is 15 or more, 
// the durability of the item is decreased
// by 10.
// -- (e <= 15){
//    (d-10)
//}
// If the item's enhancement level is greater
// than 16, the enhancement level decreases
// by 1 (17 goes down to 16, 18 goes down
// to 17).
// -- (e <16){
//   (d-1)
//}

// It is calculated with the following equation:
// AFR = (24 * 365) / MTBF (hr). MTBF 
// (Mean time between failures)
// refers to the average time during which a device
//functions before it reaches the end of life. 2.

describe("calculating unit tests", ()=> {
    const enhancer = require("./enhancer")

        test("repair", ()=> {
            expect(enhancer.repair()).toBe()
            expect(enhancer.repair()).toBe()
            expect(enhancer.repair()).toBe()
            expect(()=> enhancer.repair()).toThrow()

        })


        test("success", ()=> {
            expect(enhancer.success()).toBe()
            expect(enhancer.success()).toBe()
            expect(enhancer.success()).toBe()
            expect(()=> enhancer.success()).toThrow()

        })

        test("fail", ()=> {
            expect(enhancer.fail()).toBe()
            expect(enhancer.fail()).toBe()
            expect(enhancer.fail()).toBe()
            expect(()=> enhancer.fail()).toThrow()

        })
}