//1
const AssistedNumber = [
    [[1]]
    [[1,1],[2]]
    [[1,2],[1,1,1],[3]]
    [[1,3],[2,2],[4]]
    [[2,3][4,1][5]]
    [[3,3][4,2][5,1],[6]]
    [[4,3],[5,2],[6,1],[7]]
    [[4,4],[5,3],[6,2],[7,1],[8]]
    [[5,4],[6,3],[7,2],[8,1],[9]]
    [[5,5],[6,4],[7,3],[8,2],[9,1],[10]]
]


function Replace() {
    alert("Can assist ");   
}

let vide=[0]*4;
let t1=[1,4,3,6,7,9,2,1,4];
let tt;
let n = 3;
let Count=0;
for (let i = 0; i < AssistedNumber[n-1].length; i++) {
    Count=0;
    let found=false;
    tt=t1;
    for (let j = 0; j < AssistedNumber[n-1][i].length; j++) {
        if (tt.findIndex(AssistedNumber[n-1][i][j])){
            Count++;
            found=true;
            let x =tt.findIndex(AssistedNumber[n-1][i][j]);
            vide[z]=x;
            tt[x]=0;
            break
        }
    }

    if (found == false) {
        break
    }

    if (Count==AssistedNumber[n-1][i].length) {
        Replace();
    }
}