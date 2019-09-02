i m p o r t { compute } from
’ . / compute ’ ;
d e s c r i b e ( ’ compute ’ , ( ) = > {
// s u i t e
i t ( ’ s h o u l d r e t u r n 0 i f i n p u t i s n e g a t i v e ’ , ( ) = > {
c o n s t r e s u l t = compute ( −1);
e x p e c t ( r e s u l t ) . toBe ( 0 ) ;
})
i t ( ’ should increment i f input i s
c o n s t r e s u l t = compute ( 1 ) ;
e x p e c t ( r e s u l t ) . toBe ( 2 ) ;
})
p o s i t i v e ’ , ( ) = > {
})
