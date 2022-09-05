export default function factorisator (data) {

    if(+data <= 1){return 1}
    return +data * factorisator(+data-1)

};

