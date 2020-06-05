#### Markdown 作图

`mermaid`：是Markdown的作图语言。参数：

1. 节点(node)形状

   - `content`：默认节点。
   - `B[content]`：文本节点。
   - `C(content)`：圆角节点
   - `D((content))`：圆形节点
   - `E>content]`：非对称节点
   - `F{content}`：菱形节点

   ```mermaid
   graph LR
   默认节点 --- B[B节点] --- C(C节点) --- D((D节点)) --- E>E节点]---F{F节点}
   ```

2. 连线

   - `node --> node`：箭头
   - `node --- node`：直线
   - `node -- explain --> node`：带说明的直线
   - `node -- explain --- node`：带说明的箭头
   - `node -.-> node`：虚线箭头
   - `node .- node`：虚线直线
   - `node -.explain.-> node`：带说明的虚线直线
   - `node -.explain.- node`：带说明的虚线直线
   - `node ==> node`：粗线箭头
   - `node === node`：粗线直线
   - `node ==explain==> node`：带说明的粗线箭头
   - `node ==explain=== node`：带说明的粗线直线

   ```mermaid
   graph TB
   A --> B
   C --- D
   G -- explain --> H
   E -- explain --- F
   I -.-> J
   K .- L
   M -.explain.-> N
   O -.explain.- P
   Q ==> R
   S === T
   U ==explain==> V
   W ==explain=== X
   ```

3. 父子图

   - `subgraph`：包含框

   - `end`：一个包含框结束

     ```mermaid
     graph LR
       subgraph parent
         child
       end
       subgraph parentone
         childone
       end
       child --> childone
     ```

4. 流程图：一个流程图只能取一个方向

   1. `graph TB`：从上到下
   2. `graph TB`：从上到下
   3. `graph BT`：从下到上
   4. `graph LR`：从左到右
   5. `graph RL`：从右到左

5. 

