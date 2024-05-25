


# Landing Page / Product
   Logic:
       > product presentation
       > order product
       > payment
       > email notification / confirmation
       ? admin panel

    TECH STACK

       > backend
           - node.js
           - http mini server
           - api endpoint
           ? database

        > frontend
            - html
            - css (scss)
            - js (ajax/fetch) - api
            ? bootstrap
            ? react

        > vcs
          - git
          - github

    PC
    |
+----------------------------------------+
|  OS(Windows)                           |
+----------------------------------------+
                                         |
                                         |                      Tv 192.168.0.113
                             localhost   |                       ^
node -> server.mjs         127.0.0.1  \  | network interface     |
           |                           \ | /                     |
           +----server(class Server)     +<-------------->[router / modem] <--------->internet
                  |                 / /  | 192.168.0.111         ^
           +---------------+       |  |  |                       |
           |               |       |  |  |                   smartphone 192.168.112
           |               |       |  |  |
           |               |       |  |  |
           |               --12345-+  |  |
           | .listen(8000)<-----------+  |
           +---------------+             |
                                         |
    chrome                            ^
      |                               |
   localhost:8000 ----req Get /-------+                                        