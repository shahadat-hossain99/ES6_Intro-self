const king = { name: "Mufasa", age: 56, kingdom: "Pride land" };

// Object.freeze(king);
Object.seal(king);
king.name = "King shahadat";
king.queen = "Sarabiii";
delete king.age; // this method can delete any property of a object
console.log(king); //{ name: 'King shahadat', kingdom: 'Pride land', queen: 'Sarabiii' }

/**
 * ! Seal vs Freeze 
 * 
 * 
 *          !Seal
 * 👉 Object কে “seal” করলে:

    ✅ নতুন property যোগ করা যাবে না
    ❌ delete করা যাবে না
    ✅ কিন্তু existing value change করা যাবে


 *          ! Freeze
 * 👉 Object পুরোপুরি lock হয়ে যায় 🔒

    ❌ নতুন property যোগ করা যাবে না
    ❌ delete করা যাবে না
    ❌ value change করা যাবে না
 *

    keys() → শুধু নাম

    values() → শুধু মান

    entries() → নাম + মান

    delete → property মুছে ফেলে

    seal() → আংশিক lock

    freeze() → পুরো lock
    
    */
