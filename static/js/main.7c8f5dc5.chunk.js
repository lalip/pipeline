(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{42:function(e,t,r){e.exports=r(55)},47:function(e,t,r){},48:function(e,t,r){},49:function(e,t,r){},55:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(7),s=r.n(i),m=(r(47),r(10)),o=r(27),l=r(28),c=r(40),d=r(30),u=r(41),p=r(57),f=r(58),x=(r(48),r(49),r(65)),_=r(66),b=r(64),g=r(59),$=r(60),h=r(61),w=r(62),E=r(37),v=r(31),j=(r(51),{code:[],trace:[],hazards:{data:[],control:[]},errors:[],disabled:!1}),k=function(e){return a.a.createElement(p.a,{noGutters:!0,className:"align-items-center"},a.a.createElement(f.a,{xs:6,sm:12,md:4,lg:12,xl:4},e.name,":"),a.a.createElement(f.a,{xs:6,sm:12,md:8,lg:12,xl:8},a.a.createElement(h.a,{toggle:!0},e.options.map((function(t,r){return a.a.createElement(w.a,{key:e.name+r,type:"radio",value:r,size:"sm",disabled:e.disabled,variant:(e.value===r?"":"outline-")+"secondary",onClick:e.disabled?null:function(t){e.onChange(parseInt(t.target.value))}},t)})))))},C=function(e){return a.a.createElement(k,{name:e.name,disabled:e.disabled,options:["ON","OFF"],value:1-e.value,onChange:function(t){e.onChange(!t)}})},N=function(e){return a.a.createElement(p.a,{noGutters:!0},a.a.createElement(f.a,{xs:{offset:6},sm:{offset:0},md:{offset:4},lg:{offset:0},xl:{offset:4}},a.a.createElement(E.a,{onClick:e.onClick,disabled:e.disabled},"Simular")))},y=function(e){return a.a.createElement(x.a,{bg:"light"},a.a.createElement(x.a.Header,null,"Editor"),a.a.createElement(x.a.Body,null,e.errors.map((function(e){return a.a.createElement(_.a,{variant:"danger"},e)})),a.a.createElement(p.a,{className:"align-items-center"},a.a.createElement(f.a,{sm:8,md:7,lg:8,xl:7},a.a.createElement(v.Controlled,{value:e.code,options:{lineNumbers:!0},onBeforeChange:function(t,r,n){e.onCodeChange(n)},onChange:function(e,t,r){}})),a.a.createElement(f.a,{sm:4,md:5,lg:4,xl:5},a.a.createElement("br",null),a.a.createElement(C,{name:"Forward",value:e.forwarding,onChange:e.onFwdChange}),a.a.createElement("br",null),a.a.createElement(N,{disabled:e.disableBtn,onClick:e.onSubmit})))),a.a.createElement(x.a.Footer,null,a.a.createElement(b.a,{placement:"left-end",overlay:a.a.createElement(g.a,null,"Memoria de 1024 palabras.\nL\xedmite de 1000 ciclos.\n\nJump se resuelve en ID\nBranch se resuelve en MEM\n\nInstrucciones soportadas:\n  - add $dst, $src, $tgt\n  - sub $dst, $src, $tgt\n  - and $dst, $src, $tgt\n  - or $dst, $src, $tgt\n  - nor $dst, $src, $tgt\n  - xor $dst, $src, $tgt\n  - addi $tgt, $src, imm\n  - andi $tgt, $src, imm\n  - ori $tgt, $src, imm\n  - xori $tgt, $src, imm\n  - slt $dst, $src, $tgt\n  - sll $dst, $tgt, shamt\n  - srl $dst, $tgt, shamt\n  - lw $tgt, offset($src)\n  - sw $tgt, offset($src)\n  - beq $src, $tgt, label\n  - bne $src, $tgt, label\n  - j label\n  - jal label\n  - jr $src\n")},a.a.createElement($.a,{variant:"info"},"?"))))},z=r(63),S=function(e){return a.a.createElement(x.a,{bg:"light",id:"hazards"},a.a.createElement(x.a.Header,null,"Hazards"),a.a.createElement(x.a.Body,null,a.a.createElement(z.a,null,a.a.createElement("tbody",null,e.hazards.control.map((function(t,r){return a.a.createElement("tr",{key:r},a.a.createElement("td",null,0===r?"Control:":""),a.a.createElement("td",{className:"right"},t.source+":"),a.a.createElement("td",{className:"code"},e.code[t.imem]))})),e.hazards.data.map((function(t,r){return a.a.createElement("tr",{key:r},a.a.createElement("td",null,0===r?"Datos:":""),a.a.createElement("td",{className:"right"},t[0].source+":",a.a.createElement("br",null),t[1].source+":"),a.a.createElement("td",{className:"code"},e.code[t[0].imem],a.a.createElement("br",null),e.code[t[1].imem]))}))))))},O=function(e){return a.a.createElement(x.a,{bg:"light"},a.a.createElement(z.a,null,a.a.createElement("tbody",null,a.a.createElement("tr",{className:"card-header"},a.a.createElement("td",{className:"pad-left"},"Ciclo"),a.a.createElement("td",null,"IF"),a.a.createElement("td",null,"ID"),a.a.createElement("td",null,"EX"),a.a.createElement("td",null,"MEM"),a.a.createElement("td",null,"WB")),e.trace.map((function(t,r){return a.a.createElement("tr",{key:r},a.a.createElement("td",{className:"right pad-right"},r+1),t.map((function(t,r){return t<0||t>=e.code.length?a.a.createElement("td",{className:"small code",key:r},"(nop)"):a.a.createElement("td",{className:"code",key:r},e.code[t])})))})))))},B={sll:{opcode:0,funct:0},srl:{opcode:0,funct:2},jr:{opcode:0,funct:8},add:{opcode:0,funct:32},sub:{opcode:0,funct:34},and:{opcode:0,funct:36},or:{opcode:0,funct:37},xor:{opcode:0,funct:38},nor:{opcode:0,funct:39},slt:{opcode:0,funct:42},j:{opcode:2},jal:{opcode:3},beq:{opcode:4},bne:{opcode:5},addi:{opcode:8},andi:{opcode:12},ori:{opcode:13},xori:{opcode:14},lw:{opcode:35},sw:{opcode:43}},J={$0:0,$zero:0,$1:1,$at:1,$2:2,$v0:2,$3:3,$v1:3,$4:4,$a0:4,$5:5,$a1:5,$6:6,$a2:6,$7:7,$a3:7,$8:8,$t0:8,$9:9,$t1:9,$10:10,$t2:10,$11:11,$t3:11,$12:12,$t4:12,$13:13,$t5:13,$14:14,$t6:14,$15:15,$t7:15,$16:16,$s0:16,$17:17,$s1:17,$18:18,$s2:18,$19:19,$s3:19,$20:20,$s4:20,$21:21,$s5:21,$22:22,$s6:22,$23:23,$s7:23,$24:24,$t8:24,$25:25,$t9:25,$26:26,$k0:26,$27:27,$k1:27,$28:28,$gp:28,$29:29,$sp:29,$30:30,$fp:30,$31:31,$ra:31},F=function(e){return function(t,r){var n,a=0,i=0,s=0,m=0,o=0,l=0,c=0;if(t=t.split(" "),void 0!==B[t[0]]){switch(n=B[t[0]].opcode,t[0]){case"add":case"sub":case"slt":case"and":case"or":case"nor":case"xor":if(4!==t.length)return;o=B[t[0]].funct,s=J[t[1]],a=J[t[2]],i=J[t[3]];break;case"addi":case"andi":case"ori":case"xori":if(4!==t.length)return;i=J[t[1]],a=J[t[2]],l=parseInt(t[3]);break;case"sll":case"srl":if(4!==t.length)return;o=B[t[0]].funct,s=J[t[1]],i=J[t[2]],m=parseInt(t[3]);break;case"lw":case"sw":if(3!==t.length)return;var d=t[2].split(")")[0].split("(");i=J[t[1]],l=parseInt(d[0]),a=J[d[1]];break;case"beq":case"bne":if(4!==t.length)return;a=J[t[1]],i=J[t[2]],l=e[t[3]]-r-1;break;case"jal":case"j":if(2!==t.length)return;c=e[t[1]]+1048576;break;case"jr":if(2!==t.length)return;o=B[t[0]].funct,a=J[t[1]];break;default:return}if(void 0!==a&&void 0!==i&&void 0!==s&&void 0!==m&&void 0!==o&&!isNaN(c)&&!isNaN(l))return(n<<26)+(a<<21)+(i<<16)+(s<<11)+(m<<6)+(63&o)+(65535&l)+(67108863&c)}}};var I=function(e,t){var r=e.split("\n").map((function(e){return e.split("#")[0]})),n=r.map((function(e,t){return[t+1,e.split(":").reverse()[0].replace(/[,\t]/g," ").trim().split(" ").filter((function(e){return e})).join(" ")]})).filter((function(e){return e[1]})),a=n.map((function(e){return e[0]})),i={code:[],trace:[],hazards:{data:[],control:[]},errors:[]},s={},m=0;r.map((function(e){return e.split(" ").filter((function(e){return e})).join(" ")})).filter((function(e){return e})).forEach((function(e,t){if(e.includes(":")){var r=e.split(":");r[0].includes(" ")&&i.errors.push("No se pudo interpretar la l\xednea "+a[t]),s[r[0].toLowerCase()]=t-m,r[1]||m++}})),r=n.map((function(e){return e[1]})),i.code=r;var o=r.map((function(e){return e.toLowerCase()})).map(F(s));if(o.includes(void 0))return i.errors.push("No se pudo interpretar la l\xednea "+a[o.indexOf(void 0)]),i;i.debug={line_nums:a,assembly:o.map((function(e){return"0x"+(e>>28&15).toString(16)+(e>>24&15).toString(16)+(e>>20&15).toString(16)+(e>>16&15).toString(16)+(e>>12&15).toString(16)+(e>>8&15).toString(16)+(e>>4&15).toString(16)+(15&e).toString(16)}))},console.log(i.debug.assembly.join("\n"));for(var l,c,d,u={add:32,addi:8,sub:34,eq:4,neq:5,slt:42,sll:0,srl:2,and:36,andi:12,or:37,ori:13,nor:39,xor:38,xori:14,lw:35,sw:43},p=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4096,0,0],f={},x=0,_=0,b={ifid:{pc:-1,instruction:0,nop:!0},idex:{pc:-1,instruction:0,rs_value:0,rt_value:0,control:{},nop:!0},exmem:{pc:-1,instruction:0,rt_value:0,alu_result:0,dest_reg:0,control:{},nop:!0},memwb:{pc:-1,instruction:0,alu_result:0,mem_read:0,dest_reg:0,control:0,nop:!0},wbout:-1},g={idmem_ras:!1,idmem_rat:!1,idmem_rs:!1,idmem_rt:!1,idex_rs:!1,idex_rt:!1,id_stall:!1,if_flush:!1,ex_flush:!1};;){if(_++,g.ex_flush&&(b={ifid:{pc:-1,instruction:0,nop:!0},idex:{pc:-1,instruction:0,rs_value:0,rt_value:0,control:{},nop:!0},exmem:{pc:-1,instruction:0,rt_value:0,alu_result:0,dest_reg:0,control:{},nop:!0},memwb:{pc:b.memwb.pc,instruction:0,alu_result:0,mem_read:0,dest_reg:0,control:0,nop:!0},wbout:b.memwb.pc}),g.if_flush&&(b.ifid={pc:-1,instruction:0,nop:!0}),g={idmem_ras:!1,idmem_rat:!1,idmem_rs:!1,idmem_rt:!1,idex_rs:!1,idex_rt:!1,id_stall:!1,if_flush:!1,ex_flush:!1},b.memwb.control.link&&(31===(b.idex.instruction>>21&31)&&(g.idmem_ras=!0),31===(b.idex.instruction>>16&31)&&(g.idmem_rat=!0)),b.memwb.control.regwrite&&0!==b.memwb.dest_reg&&(b.memwb.dest_reg===(b.idex.instruction>>21&31)&&(g.idmem_rs=!0),b.memwb.dest_reg===(b.idex.instruction>>16&31)&&(g.idmem_rt=!0)),!b.exmem.control.memread||b.exmem.dest_reg!==(b.idex.instruction>>21&31)&&b.exmem.dest_reg!==(b.idex.instruction>>16&31)||(g.id_stall=!0),b.exmem.control.regwrite&&0!==b.exmem.dest_reg&&(b.exmem.dest_reg===(b.idex.instruction>>21&31)&&(g.idex_rs=!0,g.idmem_rs=!1),b.exmem.dest_reg===(b.idex.instruction>>16&31)&&(g.idex_rt=!0,g.idmem_rt=!1)),(g.idmem_ras||g.idmem_rat||g.idmem_rs||g.idmem_rt)&&(l=JSON.stringify([{imem:b.memwb.pc,source:a[b.memwb.pc]},{imem:b.idex.pc,source:a[b.idex.pc]}]),i.hazards.data.includes(l)||i.hazards.data.push(l)),(g.idex_rs||g.idex_rt||g.id_stall)&&(l=JSON.stringify([{imem:b.exmem.pc,source:a[b.exmem.pc]},{imem:b.idex.pc,source:a[b.idex.pc]}]),i.hazards.data.includes(l)||i.hazards.data.push(l)),(g.idmem_ras||g.idmem_rat||g.idmem_rs||g.idmem_rt||g.idex_rs||g.idex_rt)&&(g.id_stall=g.id_stall?1:!t.forwarding),g.idmem_ras&&(b.idex.rs_value=b.memwb.pc+1048577,b.idex.control.jumpreg&&(x=b.memwb.pc+1)),g.idmem_rat&&(b.idex.rt_value=b.memwb.pc+1048577),g.idmem_rs&&(b.idex.rs_value=b.memwb.control.memtoreg?b.memwb.mem_read:b.memwb.alu_result),g.idmem_rt&&(b.idex.rt_value=b.memwb.control.memtoreg?b.memwb.mem_read:b.memwb.alu_result),g.idex_rs&&(b.idex.rs_value=b.exmem.alu_result),g.idex_rt&&(b.idex.rt_value=b.exmem.alu_result),l=b.memwb.control.memtoreg?b.memwb.mem_read:b.memwb.alu_result,b.memwb.control.regwrite&&0!==b.memwb.dest_reg&&(p[b.memwb.dest_reg]=l),b.memwb.control.link&&(p[31]=b.memwb.pc+1048577),b.wbout=b.memwb.pc,(b.exmem.control.memread||b.exmem.control.memwrite)&&((b.exmem.alu_result<0||b.exmem.alu_result>=4096)&&i.errors.push("Lectura/escritura fuera del rango de memoria"),3&b.exmem.alu_result&&i.errors.push("Lectura/escritura desalineada en memoria")),b.exmem.control.memread&&(b.memwb.mem_read=f[b.exmem.alu_result/4]||0),b.exmem.control.memwrite&&(f[b.exmem.alu_result/4]=b.exmem.rt_value),b.memwb.pc=b.exmem.pc,b.memwb.instruction=b.exmem.instruction,b.memwb.alu_result=b.exmem.alu_result,b.memwb.dest_reg=b.exmem.dest_reg,b.memwb.control=b.exmem.control,b.memwb.nop=b.exmem.nop,g.id_stall)b.exmem={pc:-1,instruction:0,rt_value:0,alu_result:0,dest_reg:0,control:{},nop:!0};else{switch(b.exmem.control=b.idex.control,b.exmem.pc=b.idex.pc,b.exmem.rt_value=b.idex.rt_value,b.exmem.dest_reg=b.idex.control.regdst?b.idex.instruction>>11&31:b.idex.instruction>>16&31,b.exmem.instruction=b.idex.instruction,b.exmem.nop=b.idex.nop,(l=65535&b.idex.instruction)>32767&&(l-=65536),l=b.idex.control.alusrc?l:b.idex.rt_value,b.exmem.control.aluop){default:case u.add:case u.addi:case u.lw:case u.sw:case u.sll:case u.srl:b.exmem.alu_result=b.idex.rs_value+l;break;case u.sub:b.exmem.alu_result=b.idex.rs_value-l;break;case u.eq:b.exmem.alu_result=b.idex.rs_value===l;break;case u.neq:b.exmem.alu_result=b.idex.rs_value!==l;break;case u.lt:b.exmem.alu_result=b.idex.rs_value<l;break;case u.and:case u.andi:b.exmem.alu_result=b.idex.rs_value&l;break;case u.or:case u.ori:b.exmem.alu_result=b.idex.rs_value|l;break;case u.nor:b.exmem.alu_result=!(b.idex.rs_value|l);break;case u.xor:case u.xori:b.exmem.alu_result=b.idex.rs_value^l}b.exmem.control.shleft&&(b.exmem.alu_result=b.exmem.alu_result<<(b.exmem.instruction>>6&31)),b.exmem.control.shright&&(b.exmem.alu_result=b.exmem.alu_result>>(b.exmem.instruction>>6&31)),c=b.ifid.instruction>>26&63,d=63&b.ifid.instruction,b.idex.control={regdst:0===(40&c),branch:4===(12&c),memread:32===(40&c),memtoreg:32===(32&c),memwrite:40===(40&c),alusrc:0!==(40&c),jump:2===(42&c),link:3===(35&c),jumpreg:0===(15&c)&&8===(10&d),shleft:0===(15&c)&&0===(42&d),shright:0===(15&c)&&2===(42&d),regwrite:[0,8,12,13,14,35].includes(c),aluop:c||d},(b.idex.nop=b.ifid.nop)?b.idex={pc:-1,instruction:0,rs_value:0,rt_value:0,control:{},nop:!0}:(b.idex.instruction=b.ifid.instruction,b.idex.pc=b.ifid.pc,b.idex.rs_value=p[b.ifid.instruction>>21&31],b.idex.rt_value=p[b.ifid.instruction>>16&31]),b.ifid.instruction=o[x],void 0===b.ifid.instruction?(b.ifid.instruction=0,b.ifid.nop=!0,b.ifid.pc=x,x!==o.length&&i.errors.push("Program Counter fuera de rango de memoria")):(b.ifid.nop=!1,b.ifid.pc=x,x++),g.if_flush=g.ex_flush=!1,b.idex.control.jump&&(x=(67108863&b.idex.instruction)-1048576),b.idex.control.jumpreg&&(x=b.idex.rs_value-1048576),(b.idex.control.jump||b.idex.control.jumpreg)&&(g.if_flush=!0)}if(b.memwb.control.branch&&b.memwb.alu_result&&(x=b.memwb.pc+(65535&b.memwb.instruction)+1,g.ex_flush=!0),g.if_flush&&(l=JSON.stringify({imem:b.idex.pc,source:a[b.idex.pc]}),i.hazards.control.includes(l)||i.hazards.control.push(l)),g.ex_flush&&(l=JSON.stringify({imem:b.memwb.pc,source:a[b.memwb.pc]}),i.hazards.control.includes(l)||i.hazards.control.push(l)),i.trace.push([b.ifid.pc,b.idex.pc,b.exmem.pc,b.memwb.pc,b.wbout]),b.ifid.nop&&b.idex.nop&&b.exmem.nop&&b.memwb.nop)break;if(_>=1e3&&i.errors.push("Se agot\xf3 el tiempo de c\xf3mputo disponible"),i.errors.length>0)break}return i.hazards.data=i.hazards.data.map((function(e){return JSON.parse(e)})).sort((function(e,t){return e[0].imem-t[0].imem})),i.hazards.control=i.hazards.control.map((function(e){return JSON.parse(e)})).sort((function(e,t){return e.imem-t.imem})),i},q=function(e){function t(e){var r;return Object(o.a)(this,t),(r=Object(c.a)(this,Object(d.a)(t).call(this,e))).runCode=function(){var e=I(r.state.input_code,{forwarding:r.state.forwarding,jump:r.state.jump,branch:r.state.branch});r.setState(Object(m.a)({},e,{disabled:!0}))},r.state=Object(m.a)({},j,{input_code:"#                              #\n#     Ejemplo PEP 1 2-2018     #\n#  con constantes A: 0 y B: 4  #\n#                              #\n\n      # valor inicial $t0\n      addi $8 $zero 0x1\n\nFOR:  beq  $t0, $zero, NEXT\n      lw   $t1, 0($s0)       # A\n      lw   $t2, 4($s0)       # B\n      add  $t3, $t1, $t2\n      sw   $t3, 0($s0)       # A\n      addi $t0, $t0, -1\n      j    FOR\nNEXT: addi $t0, $t0, 1\n      sw   $t0, 0($s0)       # A\n",forwarding:!0,jump:0,branch:2}),r}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.runCode()}},{key:"render",value:function(){return a.a.createElement(p.a,{className:"justify-content-center"},a.a.createElement(f.a,{lg:7},this.renderEditor()),a.a.createElement(f.a,{md:8,lg:5},this.renderHazards()),a.a.createElement(f.a,null,this.renderTrace()))}},{key:"renderEditor",value:function(){var e=this;return a.a.createElement(y,{code:this.state.input_code,onCodeChange:function(t){return e.setState(Object(m.a)({input_code:t},j))},onSubmit:this.runCode,disableBtn:this.state.disabled,errors:this.state.errors,forwarding:this.state.forwarding,onFwdChange:function(t){return e.setState(Object(m.a)({forwarding:t},j))},jump:this.state.jump,onJumpChange:function(t){return e.setState(Object(m.a)({jump:t},j))},branch:this.state.branch,onBranchChange:function(t){return e.setState(Object(m.a)({branch:t},j))}})}},{key:"renderHazards",value:function(){return a.a.createElement(S,{hazards:this.state.hazards,code:this.state.code})}},{key:"renderTrace",value:function(){return a.a.createElement(O,{trace:this.state.trace,code:this.state.code})}}]),t}(n.Component);s.a.render(a.a.createElement(q,null),document.getElementById("root"))}},[[42,1,2]]]);