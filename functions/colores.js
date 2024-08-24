export function color_aleatorio() {
    var colores = [
        '#8289FF',
        '#82C8FF',
        '#8AFF82',
        '#FF8282',
        '#BB82FF',
        '#FFFFFF',
        '#F2FF22',
        '#22FF58',
        '#22C6FF',
        '#FF4BA2'
      ]
    
      return colores[ Math.floor( Math.random() * colores.length ) ]
}