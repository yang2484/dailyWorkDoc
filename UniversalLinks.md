###### 参考

[apple文档](https://developer.apple.com/library/archive/documentation/General/Conceptual/AppSearch/UniversalLinks.html), [简书](https://www.jianshu.com/p/f1a1e1833eec), [dcloud](https://ask.dcloud.net.cn/article/36393#unilink)

######	一、apple开发者后台配置 Associated Domains

> Certificates, Identifiers & Profiles ------->  Identifiers 需要添加的应用 ------->  Associated Domains

1.2 客户端配置通用链接域名

xcode

hbuilderx

```json
    "capabilities": {  
        "entitlements": {  
            "com.apple.developer.associated-domains": [  
                "applinks:域名不包含路径如：baidu.com"  
            ]  
        }  
    }
```



###### 二、创建apple-app-site-association文件

> apple-app-site-association文件没有后缀名

```JSON
{
    "applinks": {
        "apps": [],
        "details": [
            {
                "appID": "7244G696P8.uni.UNI10D5B66",
                "paths": [ "*", "/qq_con/101946261", "/qq_conn/101946261", "/qq_con/101946261/*", "/qq_conn/101946261/*" ]
            }
        ]
    }
}
// apps：，其值必须是空数组
// details: 可以有多少个app， 每个app包含 appID,paths字段
// appID：由TeamID.BundleID组成。Team ID登陆开发者中心，在Account ->Membership可看到，BundleID（包名）可在Xcode中查看。
// paths：设定一个App的路径支持列表，只有这些指定的路径链接才会被App所处理。（paths是大小写敏感，*是通配符表示任意路径，一般填写这个就可以）。QQ互联每个地方写的路径不一样，不知道是qq_con还是qq_conn就全写了
```

###### 三、上传文件

apple-app-site-association文件保存的位置，上传至下面任意位置

> https://{ host }/apple-app-site-association
>
> https://{ host }/.well-known/apple-app-site-association



###### 四、检查

访问上述链接

