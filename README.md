## Create-react-app-antd-less     

 
**这是一个由create-react-app创建的项目，由于用这个脚手架本身不支持less,故要进行一系列的配置才能使用less开发。
步骤如下：**

- 1、使用脚手架创建一个项目

		create-react-app  demo

- 2、暴露webpack配置文件

		npm run eject  

- 3、修改webpack.config.dev.js和webpack.config.prod.js文件

	①将test: /\.css$/ 改为 /\.(css|less)$/

	②test: /\.css$/ 的 use 数组配置增加 less-loader


		结果如下：
		{
		  test: /\.(css|less)$/,  //修改的地方
		  use: [
		    require.resolve('style-loader'),
		    {
		      loader: require.resolve('css-loader'),
		      options: {
		        importLoaders: 1,
		      },
		    },
		    {
		      loader: require.resolve('postcss-loader'),
		      options: {
		        // Necessary for external CSS imports to work
		        // https://github.com/facebookincubator/create-react-app/issues/2677
		        ident: 'postcss',
		        plugins: () => [
		          require('postcss-flexbugs-fixes'),
		          autoprefixer({
		            browsers: [
		              '>1%',
		              'last 4 versions',
		              'Firefox ESR',
		              'not ie < 9', // React doesn't support IE8 anyway
		            ],
		            flexbox: 'no-2009',
		          }),
		        ],
		      },
		    },
		    {
		      loader: require.resolve('less-loader') // compiles Less to CSS 修改的地方
		    }
		  ],
		},

- 	4、在根目录下创建文件** *.babelrc***
		
	   
		{
		  "presets": ["es2015",
		  "react",
		  "stage-2"],
		  "plugins": [["import",{
		    "libraryName": "antd",
		    "libraryDirectory": "lib",
		    "style": true
		  }]
		  ]
		}

- 5、使用yarn 安装插件

        yarn add antd    //安装antd

		yarn add babel-plugin-import --save-dev  //按需加载antd组件

		yarn add babel-preset-stage-2 babel-preset-es2015 --save-dev  //对于es6语法的处理
		
		yarn add less-loader --save-dev  //对less支持
		
		yarn add less@2.7.2 --save-dev   //对less支持


	> 注意less的版本要指定安装

- 6、现在就可以使用antd进行主题定制了，采用less开发

	![](https://i.imgur.com/ldpzbcD.png)

	![](https://i.imgur.com/NvQiaN5.png)

- 7、对于自定义拓展iconfont图标库，参考如下链接，在这就不多说了

	[ http://www.cnblogs.com/Nick-chen/p/7211879.html?utm_source=tuicool&utm_medium=referral]( http://www.cnblogs.com/Nick-chen/p/7211879.html?utm_source=tuicool&utm_medium=referral)
