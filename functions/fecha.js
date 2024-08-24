
export function fecha_actual() {
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    const anio = fechaActual.getFullYear();
    const hora = fechaActual.getHours() > 12 ? fechaActual.getHours() - 12 : fechaActual.getHours();
    const minutos = fechaActual.getMinutes() < 10 ? '0' + fechaActual.getMinutes() : fechaActual.getMinutes();
    const amPm = fechaActual.getHours() >= 12 ? 'p.m.' : 'a.m.';

    const fechaFormateada = dia + '/' + mes + '/' + anio + ' ' + hora + ':' + minutos + ' ' + amPm;

    return fechaFormateada

}
