import {Component, AfterViewInit} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import {MapStyles} from "../../../../enums/map-styles";
import {ConstantService} from "../../../../services/constant.service";

@Component({
  selector: 'app-fill',
  templateUrl: './fill.component.html',
  styleUrl: './fill.component.less'
})
export class FillComponent implements AfterViewInit {

  constructor(
    private constantService: ConstantService
  ) {
  }

  ngAfterViewInit(): void {
    mapboxgl.accessToken = this.constantService.MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: 'mapContainer',
      style: MapStyles.STREETS_V12,
      center: this.constantService.DEFAULT_MAP_CENTER,
      zoom: 11
    });

    map.on('load', () => {
      // Add a data source containing GeoJSON data.
      map.addSource('dongCheng', {
        type: 'geojson',
        data: {
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "properties": {
              "adcode": 110101,
              "name": "东城区",
              "center": [116.418757, 39.917544],
              "centroid": [116.416718, 39.912934],
              "childrenNum": 0,
              "level": "district",
              "acroutes": [100000, 110000],
              "parent": {
                "adcode": 110000
              }
            },
            "geometry": {
              "type": "MultiPolygon",
              "coordinates": [[[[116.44364, 39.872846], [116.444118, 39.875362], [116.444463, 39.876157], [116.445373, 39.877794], [116.445617, 39.878576], [116.445642, 39.879279], [116.445339, 39.881002], [116.444708, 39.884858], [116.444179, 39.889017], [116.444068, 39.890037], [116.445964, 39.890147], [116.445903, 39.891519], [116.446934, 39.891516], [116.446986, 39.891204], [116.447359, 39.891153], [116.447393, 39.890805], [116.448199, 39.890711], [116.448311, 39.890504], [116.450017, 39.890449], [116.450382, 39.890244], [116.450935, 39.890243], [116.451013, 39.891962], [116.452373, 39.89198], [116.452391, 39.892866], [116.450866, 39.892866], [116.450875, 39.894088], [116.44716, 39.894185], [116.447004, 39.897059], [116.446831, 39.89746], [116.446857, 39.898342], [116.446824, 39.900042], [116.445965, 39.90006], [116.445879, 39.901034], [116.448026, 39.901234], [116.449066, 39.901249], [116.44872, 39.903242], [116.447023, 39.90316], [116.446087, 39.903151], [116.443809, 39.903225], [116.441964, 39.903096], [116.440196, 39.902661], [116.438697, 39.902593], [116.437667, 39.902578], [116.43718, 39.902331], [116.43679, 39.902015], [116.436478, 39.902046], [116.436453, 39.902619], [116.436322, 39.90363], [116.435959, 39.905536], [116.435839, 39.906839], [116.435751, 39.908227], [116.435672, 39.910515], [116.435569, 39.911325], [116.435084, 39.913358], [116.434988, 39.913958], [116.434808, 39.917225], [116.434652, 39.921169], [116.434488, 39.924518], [116.434309, 39.928686], [116.435941, 39.928652], [116.435945, 39.928449], [116.437056, 39.928446], [116.436931, 39.929405], [116.43731, 39.929401], [116.43731, 39.928966], [116.437581, 39.928961], [116.43759, 39.928701], [116.438728, 39.928704], [116.43873, 39.928525], [116.43903, 39.928532], [116.439059, 39.929537], [116.439572, 39.929704], [116.440306, 39.929715], [116.440417, 39.928678], [116.441724, 39.928629], [116.443681, 39.928669], [116.443753, 39.933526], [116.44371, 39.936667], [116.443753, 39.936923], [116.444455, 39.938421], [116.444541, 39.939153], [116.444541, 39.939883], [116.444611, 39.940789], [116.444784, 39.941622], [116.444948, 39.941828], [116.446179, 39.942481], [116.446551, 39.94297], [116.447272, 39.945156], [116.446709, 39.946111], [116.446344, 39.9462], [116.444672, 39.946246], [116.443641, 39.946209], [116.442645, 39.945705], [116.442116, 39.945143], [116.44177, 39.945035], [116.44106, 39.945149], [116.440556, 39.9453], [116.440751, 39.945772], [116.442326, 39.947159], [116.442244, 39.949701], [116.44028, 39.949689], [116.439951, 39.952135], [116.439073, 39.952166], [116.435419, 39.952118], [116.436017, 39.950847], [116.435739, 39.950799], [116.436216, 39.949817], [116.436797, 39.949691], [116.436701, 39.949248], [116.435098, 39.949233], [116.434821, 39.949038], [116.434361, 39.949068], [116.434205, 39.949307], [116.433999, 39.949938], [116.433486, 39.950141], [116.433053, 39.950177], [116.42948, 39.950163], [116.429464, 39.950431], [116.429056, 39.950506], [116.429049, 39.951071], [116.42989, 39.951013], [116.429898, 39.951292], [116.430218, 39.951292], [116.4302, 39.951786], [116.42949, 39.95185], [116.429552, 39.953534], [116.429421, 39.953544], [116.429387, 39.954298], [116.429022, 39.954278], [116.428996, 39.955623], [116.429204, 39.955649], [116.429161, 39.956775], [116.429004, 39.957269], [116.429804, 39.957256], [116.429829, 39.956535], [116.430618, 39.95656], [116.430514, 39.959247], [116.425433, 39.959164], [116.425338, 39.962086], [116.42487, 39.962284], [116.416237, 39.962199], [116.415383, 39.962152], [116.4142, 39.962178], [116.41414, 39.963809], [116.412187, 39.96378], [116.412161, 39.964943], [116.411424, 39.96493], [116.411096, 39.971454], [116.408786, 39.971463], [116.408821, 39.972496], [116.409341, 39.97253], [116.409359, 39.974036], [116.40751, 39.974002], [116.407579, 39.971653], [116.407545, 39.971085], [116.407361, 39.970204], [116.407483, 39.96763], [116.407718, 39.966562], [116.407872, 39.962178], [116.405485, 39.962255], [116.405478, 39.961869], [116.404192, 39.961891], [116.403671, 39.961848], [116.402683, 39.962433], [116.401448, 39.962424], [116.401301, 39.962082], [116.40045, 39.962051], [116.399702, 39.962388], [116.398852, 39.96238], [116.39874, 39.962562], [116.398227, 39.962531], [116.396959, 39.963204], [116.389506, 39.963147], [116.38948, 39.961038], [116.387664, 39.960923], [116.387367, 39.959486], [116.386776, 39.957016], [116.393342, 39.957349], [116.393443, 39.950464], [116.393969, 39.95048], [116.394203, 39.944265], [116.394273, 39.940632], [116.395149, 39.94056], [116.396166, 39.94006], [116.396703, 39.928311], [116.398821, 39.928359], [116.399231, 39.928129], [116.399464, 39.923568], [116.396823, 39.923467], [116.396823, 39.922529], [116.392184, 39.922427], [116.392548, 39.915208], [116.392635, 39.912922], [116.392062, 39.912892], [116.392096, 39.912426], [116.391956, 39.9124], [116.391879, 39.912052], [116.391836, 39.911232], [116.392678, 39.911219], [116.392695, 39.908668], [116.392373, 39.908294], [116.392251, 39.907882], [116.395563, 39.907992], [116.395813, 39.902905], [116.396089, 39.899446], [116.396394, 39.899051], [116.397602, 39.898674], [116.397698, 39.898579], [116.397871, 39.89604], [116.39813, 39.890984], [116.398434, 39.886366], [116.398581, 39.882537], [116.398598, 39.881078], [116.398442, 39.881097], [116.398468, 39.880215], [116.39872, 39.880215], [116.3991, 39.872201], [116.392543, 39.871912], [116.386435, 39.871582], [116.384836, 39.871481], [116.380587, 39.871146], [116.38069, 39.869614], [116.380516, 39.869336], [116.380559, 39.867942], [116.379691, 39.867965], [116.379604, 39.86779], [116.37862, 39.867688], [116.378734, 39.867025], [116.377856, 39.866928], [116.377134, 39.866694], [116.377664, 39.86668], [116.378551, 39.866434], [116.380681, 39.866054], [116.381602, 39.866017], [116.382567, 39.866065], [116.383383, 39.866231], [116.384191, 39.866531], [116.38527, 39.867066], [116.38534, 39.866777], [116.387894, 39.867376], [116.387911, 39.866513], [116.387868, 39.866043], [116.387679, 39.865198], [116.391054, 39.865267], [116.391203, 39.865218], [116.391235, 39.86374], [116.392973, 39.863774], [116.392993, 39.862307], [116.394279, 39.862286], [116.394279, 39.862733], [116.394956, 39.862733], [116.394982, 39.862121], [116.395364, 39.861436], [116.395451, 39.861106], [116.395504, 39.858679], [116.399515, 39.858625], [116.399472, 39.859723], [116.403645, 39.859693], [116.403686, 39.859664], [116.406862, 39.859965], [116.408224, 39.858913], [116.410619, 39.858874], [116.412451, 39.858934], [116.412432, 39.860107], [116.414144, 39.860141], [116.413961, 39.864035], [116.414369, 39.864034], [116.414404, 39.863709], [116.415081, 39.863678], [116.415107, 39.863467], [116.415819, 39.8635], [116.415896, 39.863644], [116.415827, 39.865766], [116.416677, 39.86574], [116.416755, 39.866885], [116.415689, 39.866851], [116.41568, 39.867077], [116.415229, 39.867063], [116.415193, 39.868643], [116.415046, 39.868835], [116.415046, 39.869334], [116.415827, 39.86936], [116.415828, 39.869825], [116.413667, 39.869826], [116.413658, 39.87114], [116.416904, 39.871187], [116.416869, 39.871473], [116.419297, 39.87175], [116.42047, 39.871949], [116.421414, 39.872175], [116.42321, 39.872829], [116.425108, 39.872826], [116.426947, 39.872696], [116.435209, 39.872176], [116.442573, 39.871879], [116.442989, 39.871917], [116.443363, 39.872104], [116.443509, 39.872312], [116.44364, 39.872846]]]]
            }
          }]
        }
      });

      map.addLayer({
        'id': 'dongCheng',
        'type': 'fill',
        'source': 'dongCheng',
        'layout': {},
        'paint': {
          'fill-color': '#0080ff',
          'fill-opacity': 0.5
        }
      });
      map.addLayer({
        'id': 'outline',
        'type': 'line',
        'source': 'dongCheng',
        'layout': {},
        'paint': {
          'line-color': '#000',
          'line-width': 2
        }
      });
    });
  }
}
