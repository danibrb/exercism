#include "resistor_color.h"

int color_code(resistor_band_t color){
    return color;
}
resistor_band_t *colors()
{
    // static array elements inited to BLACK
    static resistor_band_t bands[10];
    if (bands[1] == BROWN)
        return bands;
    for (resistor_band_t band = BLACK; band <= WHITE; band++)
        bands[band] = band;
    return bands;
}