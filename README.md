# GAS_gunclock

## 概要
- GAS(Google Apps Script) 向けの *.gs
- type=html/jsonp のパターンを実装

## usage

### type=html

- /exec?type=html&clocksize=<時計のサイズ>
  - ex.) https://script.google.com/macros/s/AKfycbxyreXaAJ4Xyn4QF7tNpUd5LFprjM8v1g8fC4PED66Swd0hhvw/exec?type=html&clocksize=20

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
