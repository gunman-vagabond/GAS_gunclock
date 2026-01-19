# GAS_gunclock

## 概要
- GAS(Google Apps Script) 向けの *.gs
- type=html/jsonp のパターンを実装

## usage

### parameter

- clocksize : 時計のサイズ (ex. 18)
- clockcolor : 時計の色 (ex. ffccff) (type=htmlのとき有効)
- type : 時計の形式 { html | text | json | jsonp }
- callback : コールバック関数名 (type=jsonpのとき有効)

## sample

### type=html

- /exec?type=html&clocksize=<時計のサイズ>&clockcolor=<時計の色>
  - ex.) https://script.google.com/macros/s/AKfycbxyreXaAJ4Xyn4QF7tNpUd5LFprjM8v1g8fC4PED66Swd0hhvw/exec?type=html&clocksize=20&clockcolor=ccffff


```
         +         12        +          
            __AA                        
            | 6 |__P     __             
            ~~|    l   _|__|_           
 +           /_/~l_l  b (@@)       +    
                ##     V|~~|>           
                 ##     //T|            
                 ##  ::                 
                  #:::                  
9                  ::                3  
                                        
                                        
              ____________              
 +            | 12:57:01 |         +    
              ~~~~~~~~~~~~              
                                        
                                        
         +                   +          
                   6                    
```


### type=jsonp

- /exec?type=jsonp&clocksize=<時計のサイズ>
  - ex.) https://script.google.com/macros/s/AKfycbxyreXaAJ4Xyn4QF7tNpUd5LFprjM8v1g8fC4PED66Swd0hhvw/exec?type=jsonp&clocksize=26


```

{"message":"                         12                         ,           +                         +              ,              __AA                                  ,              | 6 |__P           __                 ,              ~~|    l         _|__|_               ,   +           /_/~l_l        b (@@)           +    ,                   ##          V|~~|>               ,                    ##          //T|                ,                     ##      ::                     ,                      ##   :::                      ,                       ##  ::                       ,                        #:::                        ,9                        ::                      3  ,                                                    ,                                                    ,                                                    ,                                                    ,                    ____________                    ,   +                | 12:55:22 |               +    ,                    ~~~~~~~~~~~~                    ,                                                    ,                                                    ,                                                    ,             +                       +              ,                         6                          ,                                                    ,"}```
