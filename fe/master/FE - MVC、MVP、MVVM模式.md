#### FE MVC、MVP、MVVM模式

**概念：**MVC、MVP、MVVM都是软件架构的设计模式，通过分离关注点来改进代码的组织方式，这三种模式的相同点是MV(Model-View)，不同点是C(Controller)、P(Presenter)、VM(View-Model)。

##### MVC（Model-View-Controller）

- **概念：**MVC允许在不改变视图的情况下改变视图对用户输入的响应方式，用户对View的操作交给了Controller处理，在Controller中响应View的事件调用Model的接口对数据进行操作，一旦Model发生变化便通知相关视图进行更新。

- **图例：**实线代表方法调用，虚线代表事件通知。

  <img src="C:\Users\acer\aioverg\前端\img\058.png" style="zoom: 80%;" />

- **Model：**模型model用于封装与应用程序的业务逻辑相关的数据以及对数据的处理方法，会有一个或多个视图监听此模型。一旦模型的数据发生变化，模型将通知有关的视图。

- **View：**视图view是它在屏幕上的表示，描绘的是model的当前状态。当模型的数据发生变化，视图相应地刷新自己。

- **Controller：**控制器controller定义用户界面对用户输入的响应方式，起到不同层面间的组织作用，用于控制应用程序的流程，它处理用户的行为和数据model上的改变。

- **设计模式：**

  1. view和model之间的观察者模式，view观察model，事先在此model上注册，以便view可以了解在数据model上发生的改变。
  2. view和controller之间的策略模式，一个策略是一个表述算法的对象，MVC允许在不改变视图外观的情况下改变视图对用户输入的响应方式。view使用controller子类的实例来实现一个特定的响应策略。要实现不同的响应的策略只要用不同种类的controller实例替换即可。甚至可以在运行时刻通过改变view的controller来改变用户输入的响应方式。例如，一个view可以被禁止接受任何输入，只需给他一个忽略输入事件的controller。

##### MVP（Model-View-Presenter）

- **概念：**MVP是MVC设计模式的一种衍生模式。

  在MVC中，一对controller-view捆绑起来表示一个ui组件，controller直接接受用户输入，并将输入转为相应命令来调用model的接口，对model的状态进行修改，最后通过观察者模式对view进行重新渲染。

  MVP的切入点是修改controller-view的捆绑关系，为了解决controller-view的捆绑关系，将view进行改造，使view不仅拥有UI组件的结构，还拥有处理用户事件的能力，这样就能将controller独立出来。为了对用户事件进行统一管理，view只负责将用户产生的事件传递给controller，由controller来统一处理，这样的好处是多个view可共用同一个controller。此时的controller也由组件级别上升到了应用级别，然而更新view的方式仍然与经典MVC一样：通过Presenter更新model，通过观察者模式更新view。

  另一个显而易见的不同在于，MVC是一个圆，一个循环的过程，但MVP不是，依赖Presenter作为核心，负责从model中拿数据，填充到view中。常见的MVP的实现是被动视图(passive view),Presenter观察model，不再是view观察model，一旦model发生变化，就会更新view。Presenter有效地绑定了model到view。view暴露了setters接口以便Presenter可以设置数据。对于这种被动视图的结构，没有直接数据绑定的概念。但是他的好处是在view和model直接提供更清晰的分离。但是由于缺乏数据绑定支持，意味着不得不单独关注某个任务。在MVP里，应用程序的逻辑主要在Presenter来实现，其中的view是很薄的一层。

- 图例

  <img src="C:\Users\acer\aioverg\前端\img\059.png" style="zoom: 80%;" />

##### MVVM（Model-View-ViewModel）

- 概念：在MVVM中，view和model是不知道彼此存在的，同MVP一样，将view和model清晰地分离开来。 其次，view是对viewmodel的外在显示，与viewmodel保持同步，viewmodel对象可以看作是view的上下文。view绑定到viewmodel的属性上，如果viewmodel中的属性值变化了，这些新值通过数据绑定会自动传递给view。反过来viewmodel会暴露model中的数据和特定状态给view。 所以，view不知道model的存在，viewmodel和model也觉察不到view。事实上，model也完全忽略viewmodel和view的存在。这是一个非常松散耦合的设计。

- 图例

  <img src="C:\Users\acer\aioverg\前端\img\060.png" style="zoom:80%;" />