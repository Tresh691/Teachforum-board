interface Board {
  id: string;
  name: string;
  elements: BoardElement[];
}

type BoardElement = SquareElement | TriangleElement | CircleElement | TextElement | LineElement | DiamondElement | ArrowElement | ImageElement
interface BaseElement {
  id: string;
  x: number;
  y: number;
  color: string;
  strokeWidth: number;
}

interface SquareElement extends BaseElement{
  type: 'square';
  width: number;
  height: number;
}

interface DiamondElement extends BaseElement{
  type: 'diamond'
  width: number;
  height: number;
}

type TriangleType = 'equilateral' | 'right' | 'isosceles'
interface TriangleElement extends BaseElement{
  type: 'triangle'
  triangleType: TriangleType;
  width: number;
  height: number;
}

interface CircleElement extends BaseElement{
  type: 'circle'
  radius: number;
}

type FontStyle = 'bold' | 'italic' | 'underline' | 'regular'
interface TextElement extends BaseElement{
  type: 'text'
  text: string;
  fontStyle: FontStyle;
  fontSize: number;
  width: number;
  height: number;
}

interface LineElement extends BaseElement{
  type: 'line'
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

interface ArrowElement extends BaseElement{
  type: 'arrow';
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

interface ImageElement extends BaseElement{
  type: 'image';
  link: string;
  width: number;
  height: number;
}