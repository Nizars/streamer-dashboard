/*
 * @Author: Nizars
 * @Date: 2018-06-21 15:45:49
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-21 15:46:36
 */

const cheers = {
  'actions': [
      {
          'prefix': 'Cheer',
          'scales': [
              '1',
              '1.5',
              '2',
              '3',
              '4'
          ],
          'tiers': [
              {
                  'min_bits': 1,
                  'id': '1',
                  'color': '#979797',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/1/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 100,
                  'id': '100',
                  'color': '#9c3ee8',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/100/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/100/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 1000,
                  'id': '1000',
                  'color': '#1db2a5',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/1000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 5000,
                  'id': '5000',
                  'color': '#0099fe',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/5000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/5000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 10000,
                  'id': '10000',
                  'color': '#f43021',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/10000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/10000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              }
          ],
          'backgrounds': [
              'light',
              'dark'
          ],
          'states': [
              'static',
              'animated'
          ],
          'type': 'global_first_party',
          'updated_at': '2018-05-22T00:06:04.877781Z',
          'priority': 0
      },
      {
          'prefix': 'Pride',
          'scales': [
              '1',
              '1.5',
              '2',
              '3',
              '4'
          ],
          'tiers': [
              {
                  'min_bits': 1,
                  'id': '1',
                  'color': '#979797',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/static/1/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/static/1/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 100,
                  'id': '100',
                  'color': '#9c3ee8',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/static/100/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/static/100/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 1000,
                  'id': '1000',
                  'color': '#1db2a5',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/static/1000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/static/1000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 5000,
                  'id': '5000',
                  'color': '#0099fe',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/static/5000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/static/5000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 10000,
                  'id': '10000',
                  'color': '#f43021',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/dark/static/10000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pride/light/static/10000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              }
          ],
          'backgrounds': [
              'light',
              'dark'
          ],
          'states': [
              'static',
              'animated'
          ],
          'type': 'global_first_party',
          'updated_at': '2018-05-31T20:18:40Z',
          'priority': 5
      },
      {
          'prefix': 'HeyGuys',
          'scales': [
              '1',
              '1.5',
              '2',
              '3',
              '4'
          ],
          'tiers': [
              {
                  'min_bits': 1,
                  'id': '1',
                  'color': '#979797',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/static/1/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/static/1/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 100,
                  'id': '100',
                  'color': '#9c3ee8',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/static/100/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/static/100/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 1000,
                  'id': '1000',
                  'color': '#1db2a5',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/static/1000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/static/1000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 5000,
                  'id': '5000',
                  'color': '#0099fe',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/static/5000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/static/5000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 10000,
                  'id': '10000',
                  'color': '#f43021',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/dark/static/10000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/heyguys/light/static/10000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              }
          ],
          'backgrounds': [
              'light',
              'dark'
          ],
          'states': [
              'static',
              'animated'
          ],
          'type': 'global_first_party',
          'updated_at': '2018-05-22T00:06:04.901208956Z',
          'priority': 6
      },
      {
          'prefix': 'FrankerZ',
          'scales': [
              '1',
              '1.5',
              '2',
              '3',
              '4'
          ],
          'tiers': [
              {
                  'min_bits': 1,
                  'id': '1',
                  'color': '#979797',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/static/1/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/static/1/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 100,
                  'id': '100',
                  'color': '#9c3ee8',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/static/100/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/static/100/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 1000,
                  'id': '1000',
                  'color': '#1db2a5',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/static/1000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/static/1000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 5000,
                  'id': '5000',
                  'color': '#0099fe',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/static/5000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/static/5000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 10000,
                  'id': '10000',
                  'color': '#f43021',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/dark/static/10000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/frankerz/light/static/10000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              }
          ],
          'backgrounds': [
              'light',
              'dark'
          ],
          'states': [
              'static',
              'animated'
          ],
          'type': 'global_first_party',
          'updated_at': '2018-05-22T00:06:04.91738639Z',
          'priority': 7
      },
      {
          'prefix': 'SeemsGood',
          'scales': [
              '1',
              '1.5',
              '2',
              '3',
              '4'
          ],
          'tiers': [
              {
                  'min_bits': 1,
                  'id': '1',
                  'color': '#979797',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/static/1/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/static/1/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 100,
                  'id': '100',
                  'color': '#9c3ee8',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/static/100/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/static/100/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 1000,
                  'id': '1000',
                  'color': '#1db2a5',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/static/1000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/static/1000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 5000,
                  'id': '5000',
                  'color': '#0099fe',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/static/5000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/static/5000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 10000,
                  'id': '10000',
                  'color': '#f43021',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/dark/static/10000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/seemsgood/light/static/10000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              }
          ],
          'backgrounds': [
              'light',
              'dark'
          ],
          'states': [
              'static',
              'animated'
          ],
          'type': 'global_first_party',
          'updated_at': '2018-05-22T00:06:04.932871904Z',
          'priority': 8
      },
      {
          'prefix': 'Party',
          'scales': [
              '1',
              '1.5',
              '2',
              '3',
              '4'
          ],
          'tiers': [
              {
                  'min_bits': 1,
                  'id': '1',
                  'color': '#979797',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/static/1/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/static/1/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 100,
                  'id': '100',
                  'color': '#9c3ee8',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/static/100/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/static/100/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 1000,
                  'id': '1000',
                  'color': '#1db2a5',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/static/1000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/static/1000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 5000,
                  'id': '5000',
                  'color': '#0099fe',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/static/5000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/static/5000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 10000,
                  'id': '10000',
                  'color': '#f43021',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/dark/static/10000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/party/light/static/10000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              }
          ],
          'backgrounds': [
              'light',
              'dark'
          ],
          'states': [
              'static',
              'animated'
          ],
          'type': 'global_first_party',
          'updated_at': '2018-05-22T00:06:04.94958545Z',
          'priority': 9
      },
      {
          'prefix': 'Kappa',
          'scales': [
              '1',
              '1.5',
              '2',
              '3',
              '4'
          ],
          'tiers': [
              {
                  'min_bits': 1,
                  'id': '1',
                  'color': '#979797',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/static/1/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/static/1/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 100,
                  'id': '100',
                  'color': '#9c3ee8',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/static/100/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/static/100/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 1000,
                  'id': '1000',
                  'color': '#1db2a5',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/static/1000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/static/1000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 5000,
                  'id': '5000',
                  'color': '#0099fe',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/static/5000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/static/5000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 10000,
                  'id': '10000',
                  'color': '#f43021',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/dark/static/10000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kappa/light/static/10000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              }
          ],
          'backgrounds': [
              'light',
              'dark'
          ],
          'states': [
              'static',
              'animated'
          ],
          'type': 'global_first_party',
          'updated_at': '2018-05-22T00:06:04.963648299Z',
          'priority': 10
      },
      {
          'prefix': 'DansGame',
          'scales': [
              '1',
              '1.5',
              '2',
              '3',
              '4'
          ],
          'tiers': [
              {
                  'min_bits': 1,
                  'id': '1',
                  'color': '#979797',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/static/1/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/static/1/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 100,
                  'id': '100',
                  'color': '#9c3ee8',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/static/100/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/static/100/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 1000,
                  'id': '1000',
                  'color': '#1db2a5',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/static/1000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/static/1000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 5000,
                  'id': '5000',
                  'color': '#0099fe',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/static/5000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/static/5000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 10000,
                  'id': '10000',
                  'color': '#f43021',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/dark/static/10000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/dansgame/light/static/10000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              }
          ],
          'backgrounds': [
              'light',
              'dark'
          ],
          'states': [
              'static',
              'animated'
          ],
          'type': 'global_first_party',
          'updated_at': '2018-05-22T00:06:04.982612384Z',
          'priority': 11
      },
      {
          'prefix': 'EleGiggle',
          'scales': [
              '1',
              '1.5',
              '2',
              '3',
              '4'
          ],
          'tiers': [
              {
                  'min_bits': 1,
                  'id': '1',
                  'color': '#979797',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/static/1/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/static/1/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 100,
                  'id': '100',
                  'color': '#9c3ee8',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/static/100/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/static/100/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 1000,
                  'id': '1000',
                  'color': '#1db2a5',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/static/1000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/static/1000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 5000,
                  'id': '5000',
                  'color': '#0099fe',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/static/5000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/static/5000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 10000,
                  'id': '10000',
                  'color': '#f43021',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/dark/static/10000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/elegiggle/light/static/10000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              }
          ],
          'backgrounds': [
              'light',
              'dark'
          ],
          'states': [
              'static',
              'animated'
          ],
          'type': 'global_first_party',
          'updated_at': '2018-05-22T00:06:05.002640717Z',
          'priority': 12
      },
      {
          'prefix': 'TriHard',
          'scales': [
              '1',
              '1.5',
              '2',
              '3',
              '4'
          ],
          'tiers': [
              {
                  'min_bits': 1,
                  'id': '1',
                  'color': '#979797',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/static/1/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/static/1/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 100,
                  'id': '100',
                  'color': '#9c3ee8',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/static/100/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/static/100/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 1000,
                  'id': '1000',
                  'color': '#1db2a5',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/static/1000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/static/1000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 5000,
                  'id': '5000',
                  'color': '#0099fe',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/static/5000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/static/5000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 10000,
                  'id': '10000',
                  'color': '#f43021',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/dark/static/10000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/trihard/light/static/10000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              }
          ],
          'backgrounds': [
              'light',
              'dark'
          ],
          'states': [
              'static',
              'animated'
          ],
          'type': 'global_first_party',
          'updated_at': '2018-05-22T00:06:05.017859327Z',
          'priority': 13
      },
      {
          'prefix': 'Kreygasm',
          'scales': [
              '1',
              '1.5',
              '2',
              '3',
              '4'
          ],
          'tiers': [
              {
                  'min_bits': 1,
                  'id': '1',
                  'color': '#979797',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/static/1/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/static/1/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 100,
                  'id': '100',
                  'color': '#9c3ee8',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/static/100/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/static/100/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 1000,
                  'id': '1000',
                  'color': '#1db2a5',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/static/1000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/static/1000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 5000,
                  'id': '5000',
                  'color': '#0099fe',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/static/5000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/static/5000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 10000,
                  'id': '10000',
                  'color': '#f43021',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/dark/static/10000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/kreygasm/light/static/10000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              }
          ],
          'backgrounds': [
              'light',
              'dark'
          ],
          'states': [
              'static',
              'animated'
          ],
          'type': 'global_first_party',
          'updated_at': '2018-05-22T00:06:05.031780943Z',
          'priority': 14
      },
      {
          'prefix': '4Head',
          'scales': [
              '1',
              '1.5',
              '2',
              '3',
              '4'
          ],
          'tiers': [
              {
                  'min_bits': 1,
                  'id': '1',
                  'color': '#979797',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/static/1/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/static/1/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 100,
                  'id': '100',
                  'color': '#9c3ee8',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/static/100/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/static/100/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 1000,
                  'id': '1000',
                  'color': '#1db2a5',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/static/1000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/static/1000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 5000,
                  'id': '5000',
                  'color': '#0099fe',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/static/5000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/static/5000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 10000,
                  'id': '10000',
                  'color': '#f43021',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/dark/static/10000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/4head/light/static/10000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              }
          ],
          'backgrounds': [
              'light',
              'dark'
          ],
          'states': [
              'static',
              'animated'
          ],
          'type': 'global_first_party',
          'updated_at': '2018-05-22T00:06:05.046230566Z',
          'priority': 15
      },
      {
          'prefix': 'SwiftRage',
          'scales': [
              '1',
              '1.5',
              '2',
              '3',
              '4'
          ],
          'tiers': [
              {
                  'min_bits': 1,
                  'id': '1',
                  'color': '#979797',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/static/1/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/static/1/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 100,
                  'id': '100',
                  'color': '#9c3ee8',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/static/100/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/static/100/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 1000,
                  'id': '1000',
                  'color': '#1db2a5',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/static/1000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/static/1000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 5000,
                  'id': '5000',
                  'color': '#0099fe',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/static/5000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/static/5000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 10000,
                  'id': '10000',
                  'color': '#f43021',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/dark/static/10000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/swiftrage/light/static/10000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              }
          ],
          'backgrounds': [
              'light',
              'dark'
          ],
          'states': [
              'static',
              'animated'
          ],
          'type': 'global_first_party',
          'updated_at': '2018-05-22T00:06:05.06079247Z',
          'priority': 16
      },
      {
          'prefix': 'NotLikeThis',
          'scales': [
              '1',
              '1.5',
              '2',
              '3',
              '4'
          ],
          'tiers': [
              {
                  'min_bits': 1,
                  'id': '1',
                  'color': '#979797',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/static/1/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/static/1/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 100,
                  'id': '100',
                  'color': '#9c3ee8',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/static/100/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/static/100/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 1000,
                  'id': '1000',
                  'color': '#1db2a5',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/static/1000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/static/1000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 5000,
                  'id': '5000',
                  'color': '#0099fe',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/static/5000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/static/5000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 10000,
                  'id': '10000',
                  'color': '#f43021',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/dark/static/10000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/notlikethis/light/static/10000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              }
          ],
          'backgrounds': [
              'light',
              'dark'
          ],
          'states': [
              'static',
              'animated'
          ],
          'type': 'global_first_party',
          'updated_at': '2018-05-22T00:06:05.074776127Z',
          'priority': 17
      },
      {
          'prefix': 'FailFish',
          'scales': [
              '1',
              '1.5',
              '2',
              '3',
              '4'
          ],
          'tiers': [
              {
                  'min_bits': 1,
                  'id': '1',
                  'color': '#979797',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/static/1/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/static/1/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 100,
                  'id': '100',
                  'color': '#9c3ee8',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/static/100/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/static/100/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 1000,
                  'id': '1000',
                  'color': '#1db2a5',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/static/1000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/static/1000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 5000,
                  'id': '5000',
                  'color': '#0099fe',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/static/5000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/static/5000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 10000,
                  'id': '10000',
                  'color': '#f43021',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/dark/static/10000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/failfish/light/static/10000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              }
          ],
          'backgrounds': [
              'light',
              'dark'
          ],
          'states': [
              'static',
              'animated'
          ],
          'type': 'global_first_party',
          'updated_at': '2018-05-22T00:06:05.088059985Z',
          'priority': 18
      },
      {
          'prefix': 'VoHiYo',
          'scales': [
              '1',
              '1.5',
              '2',
              '3',
              '4'
          ],
          'tiers': [
              {
                  'min_bits': 1,
                  'id': '1',
                  'color': '#979797',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/static/1/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/static/1/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 100,
                  'id': '100',
                  'color': '#9c3ee8',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/static/100/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/static/100/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 1000,
                  'id': '1000',
                  'color': '#1db2a5',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/static/1000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/static/1000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 5000,
                  'id': '5000',
                  'color': '#0099fe',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/static/5000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/static/5000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 10000,
                  'id': '10000',
                  'color': '#f43021',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/dark/static/10000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/vohiyo/light/static/10000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              }
          ],
          'backgrounds': [
              'light',
              'dark'
          ],
          'states': [
              'static',
              'animated'
          ],
          'type': 'global_first_party',
          'updated_at': '2018-05-22T00:06:05.102043578Z',
          'priority': 19
      },
      {
          'prefix': 'PJSalt',
          'scales': [
              '1',
              '1.5',
              '2',
              '3',
              '4'
          ],
          'tiers': [
              {
                  'min_bits': 1,
                  'id': '1',
                  'color': '#979797',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/static/1/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/static/1/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 100,
                  'id': '100',
                  'color': '#9c3ee8',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/static/100/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/static/100/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 1000,
                  'id': '1000',
                  'color': '#1db2a5',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/static/1000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/static/1000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 5000,
                  'id': '5000',
                  'color': '#0099fe',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/static/5000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/static/5000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 10000,
                  'id': '10000',
                  'color': '#f43021',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/dark/static/10000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/pjsalt/light/static/10000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              }
          ],
          'backgrounds': [
              'light',
              'dark'
          ],
          'states': [
              'static',
              'animated'
          ],
          'type': 'global_first_party',
          'updated_at': '2018-05-22T00:06:05.117506658Z',
          'priority': 20
      },
      {
          'prefix': 'MrDestructoid',
          'scales': [
              '1',
              '1.5',
              '2',
              '3',
              '4'
          ],
          'tiers': [
              {
                  'min_bits': 1,
                  'id': '1',
                  'color': '#979797',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/static/1/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/static/1/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 100,
                  'id': '100',
                  'color': '#9c3ee8',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/static/100/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/static/100/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 1000,
                  'id': '1000',
                  'color': '#1db2a5',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/static/1000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/static/1000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 5000,
                  'id': '5000',
                  'color': '#0099fe',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/static/5000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/static/5000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 10000,
                  'id': '10000',
                  'color': '#f43021',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/dark/static/10000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/mrdestructoid/light/static/10000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              }
          ],
          'backgrounds': [
              'light',
              'dark'
          ],
          'states': [
              'static',
              'animated'
          ],
          'type': 'global_first_party',
          'updated_at': '2018-05-22T00:06:05.131253621Z',
          'priority': 21
      },
      {
          'prefix': 'bday',
          'scales': [
              '1',
              '1.5',
              '2',
              '3',
              '4'
          ],
          'tiers': [
              {
                  'min_bits': 1,
                  'id': '1',
                  'color': '#979797',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/static/1/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/static/1/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 100,
                  'id': '100',
                  'color': '#9c3ee8',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/static/100/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/static/100/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 1000,
                  'id': '1000',
                  'color': '#1db2a5',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/static/1000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/static/1000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 5000,
                  'id': '5000',
                  'color': '#0099fe',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/static/5000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/static/5000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 10000,
                  'id': '10000',
                  'color': '#f43021',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/dark/static/10000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bday/light/static/10000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              }
          ],
          'backgrounds': [
              'light',
              'dark'
          ],
          'states': [
              'static',
              'animated'
          ],
          'type': 'global_first_party',
          'updated_at': '2018-05-22T00:06:05.144582993Z',
          'priority': 22
      },
      {
          'prefix': 'RIPCheer',
          'scales': [
              '1',
              '1.5',
              '2',
              '3',
              '4'
          ],
          'tiers': [
              {
                  'min_bits': 1,
                  'id': '1',
                  'color': '#979797',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/static/1/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/static/1/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 100,
                  'id': '100',
                  'color': '#9c3ee8',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/static/100/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/static/100/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 1000,
                  'id': '1000',
                  'color': '#1db2a5',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/static/1000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/static/1000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 5000,
                  'id': '5000',
                  'color': '#0099fe',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/static/5000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/static/5000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 10000,
                  'id': '10000',
                  'color': '#f43021',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/static/10000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/light/static/10000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              }
          ],
          'backgrounds': [
              'light',
              'dark'
          ],
          'states': [
              'static',
              'animated'
          ],
          'type': 'global_first_party',
          'updated_at': '2018-05-22T00:06:05.158569128Z',
          'priority': 23
      },
      {
          'prefix': 'Shamrock',
          'scales': [
              '1',
              '1.5',
              '2',
              '3',
              '4'
          ],
          'tiers': [
              {
                  'min_bits': 1,
                  'id': '1',
                  'color': '#979797',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/static/1/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/static/1/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 100,
                  'id': '100',
                  'color': '#9c3ee8',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/static/100/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/static/100/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 1000,
                  'id': '1000',
                  'color': '#1db2a5',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/static/1000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/static/1000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 5000,
                  'id': '5000',
                  'color': '#0099fe',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/static/5000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/static/5000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 10000,
                  'id': '10000',
                  'color': '#f43021',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/dark/static/10000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/shamrock/light/static/10000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              }
          ],
          'backgrounds': [
              'light',
              'dark'
          ],
          'states': [
              'static',
              'animated'
          ],
          'type': 'global_first_party',
          'updated_at': '2018-05-22T00:06:05.171906474Z',
          'priority': 24
      },
      {
          'prefix': 'DoodleCheer',
          'scales': [
              '1',
              '1.5',
              '2',
              '3',
              '4'
          ],
          'tiers': [
              {
                  'min_bits': 1,
                  'id': '1',
                  'color': '#979797',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/static/1/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/static/1/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 100,
                  'id': '100',
                  'color': '#9c3ee8',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/static/100/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/static/100/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 1000,
                  'id': '1000',
                  'color': '#1db2a5',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/static/1000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/static/1000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 5000,
                  'id': '5000',
                  'color': '#0099fe',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/static/5000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/static/5000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 10000,
                  'id': '10000',
                  'color': '#f43021',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/dark/static/10000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/doodlecheer/light/static/10000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              }
          ],
          'backgrounds': [
              'light',
              'dark'
          ],
          'states': [
              'static',
              'animated'
          ],
          'type': 'global_third_party',
          'updated_at': '2018-05-22T00:06:05.228484273Z',
          'priority': 25
      },
      {
          'prefix': 'BitBoss',
          'scales': [
              '1',
              '1.5',
              '2',
              '3',
              '4'
          ],
          'tiers': [
              {
                  'min_bits': 1,
                  'id': '1',
                  'color': '#979797',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/static/1/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/static/1/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 100,
                  'id': '100',
                  'color': '#9c3ee8',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/static/100/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/static/100/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 1000,
                  'id': '1000',
                  'color': '#1db2a5',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/static/1000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/static/1000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 5000,
                  'id': '5000',
                  'color': '#0099fe',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/static/5000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/static/5000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 10000,
                  'id': '10000',
                  'color': '#f43021',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/dark/static/10000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/bitboss/light/static/10000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              }
          ],
          'backgrounds': [
              'light',
              'dark'
          ],
          'states': [
              'static',
              'animated'
          ],
          'type': 'global_third_party',
          'updated_at': '2018-05-22T00:06:05.215069671Z',
          'priority': 26
      },
      {
          'prefix': 'Streamlabs',
          'scales': [
              '1',
              '1.5',
              '2',
              '3',
              '4'
          ],
          'tiers': [
              {
                  'min_bits': 1,
                  'id': '1',
                  'color': '#979797',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/static/1/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/static/1/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 100,
                  'id': '100',
                  'color': '#9c3ee8',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/static/100/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/static/100/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 1000,
                  'id': '1000',
                  'color': '#1db2a5',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/static/1000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/static/1000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 5000,
                  'id': '5000',
                  'color': '#0099fe',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/static/5000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/static/5000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 10000,
                  'id': '10000',
                  'color': '#f43021',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/dark/static/10000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/streamlabs/light/static/10000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              }
          ],
          'backgrounds': [
              'light',
              'dark'
          ],
          'states': [
              'static',
              'animated'
          ],
          'type': 'global_third_party',
          'updated_at': '2018-05-22T00:06:05.201122403Z',
          'priority': 27
      },
      {
          'prefix': 'Muxy',
          'scales': [
              '1',
              '1.5',
              '2',
              '3',
              '4'
          ],
          'tiers': [
              {
                  'min_bits': 1,
                  'id': '1',
                  'color': '#979797',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/static/1/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/static/1/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 100,
                  'id': '100',
                  'color': '#9c3ee8',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/static/100/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/static/100/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 1000,
                  'id': '1000',
                  'color': '#1db2a5',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/static/1000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/static/1000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 5000,
                  'id': '5000',
                  'color': '#0099fe',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/static/5000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/static/5000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 10000,
                  'id': '10000',
                  'color': '#f43021',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/dark/static/10000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/muxy/light/static/10000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              }
          ],
          'backgrounds': [
              'light',
              'dark'
          ],
          'states': [
              'static',
              'animated'
          ],
          'type': 'global_third_party',
          'updated_at': '2018-05-22T00:06:05.187848273Z',
          'priority': 28
      },
      {
          'prefix': 'HolidayCheer',
          'scales': [
              '1',
              '1.5',
              '2',
              '3',
              '4'
          ],
          'tiers': [
              {
                  'min_bits': 1,
                  'id': '1',
                  'color': '#979797',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/static/1/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/animated/1/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/animated/1/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/animated/1/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/animated/1/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/animated/1/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/static/1/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/static/1/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/static/1/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/static/1/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/static/1/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 100,
                  'id': '100',
                  'color': '#9c3ee8',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/static/100/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/animated/100/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/animated/100/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/animated/100/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/animated/100/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/animated/100/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/static/100/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/static/100/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/static/100/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/static/100/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/static/100/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 1000,
                  'id': '1000',
                  'color': '#1db2a5',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/static/1000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/animated/1000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/animated/1000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/animated/1000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/animated/1000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/animated/1000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/static/1000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/static/1000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/static/1000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/static/1000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/static/1000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 5000,
                  'id': '5000',
                  'color': '#0099fe',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/static/5000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/animated/5000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/animated/5000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/animated/5000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/animated/5000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/animated/5000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/static/5000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/static/5000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/static/5000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/static/5000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/static/5000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              },
              {
                  'min_bits': 10000,
                  'id': '10000',
                  'color': '#f43021',
                  'images': {
                      'dark': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/dark/static/10000/1.5.png'
                          }
                      },
                      'light': {
                          'animated': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/animated/10000/1.gif',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/animated/10000/2.gif',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/animated/10000/3.gif',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/animated/10000/4.gif',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/animated/10000/1.5.gif'
                          },
                          'static': {
                              '1': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/static/10000/1.png',
                              '2': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/static/10000/2.png',
                              '3': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/static/10000/3.png',
                              '4': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/static/10000/4.png',
                              '1.5': 'https://d3aqoihi2n8ty8.cloudfront.net/actions/holidaycheer/light/static/10000/1.5.png'
                          }
                      }
                  },
                  'can_cheer': true
              }
          ],
          'backgrounds': [
              'light',
              'dark'
          ],
          'states': [
              'static',
              'animated'
          ],
          'type': 'global_third_party',
          'updated_at': '2018-05-22T00:06:05.243416943Z',
          'priority': 29
      }
  ]
};
