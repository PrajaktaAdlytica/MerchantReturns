from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
import json
out=Path('public/brand');out.mkdir(exist_ok=True)
forest='#193D32';sage='#9DA78D';ivory='#F4F0E6'
# Redrawn from the selected Selvedge concept: separate folded ribbon contours.
contours=[
('main','M 120 12 C 156 10 184 42 194 96 L 130 91 C 135 61 133 27 120 12 Z'),
('main','M 0 250 L 103 114 C 119 92 141 92 160 111 L 216 172 L 168 224 C 153 241 139 250 116 250 Z'),
('sage','M 120 12 L 182 12 C 211 12 226 30 244 61 L 310 177 C 322 200 330 218 324 229 C 286 236 258 208 230 167 L 170 72 C 151 40 141 22 120 12 Z'),
('sage','M 169 223 L 215 173 C 247 214 277 246 324 229 C 299 257 265 263 236 250 C 210 240 191 229 169 223 Z'),
('main','M 299 118 L 350 35 C 362 15 375 10 399 10 L 432 10 C 418 20 412 34 416 55 L 453 206 C 460 231 470 243 482 250 L 356 250 C 374 244 375 230 367 208 L 326 104 C 321 91 314 94 306 110 L 302 122 Z')]
def symbol(primary=forest,secondary=sage):
 return ''.join(f'<path fill="{secondary if c=="sage" else primary}" d="{d}"/>' for c,d in contours)
font=TTFont('node_modules/@fontsource/newsreader/files/newsreader-latin-400-normal.woff'); glyphs=font.getGlyphSet();cmap=font.getBestCmap(); xpos=0; letters=[]
for char in 'MerchantReturns':
 name=cmap[ord(char)];pen=SVGPathPen(glyphs);glyphs[name].draw(pen);letters.append(f'<path transform="translate({xpos} 0)" d="{pen.getCommands()}"/>');xpos+=font['hmtx'][name][0]-18
wordwidth=xpos
# Outline paths keep exported typography portable and faithful to the website's Newsreader family.
def word(x,y,w,color):
 scale=w/wordwidth
 return f'<g fill="{color}" transform="translate({x} {y}) scale({scale} {-scale})">'+''.join(letters)+'</g>'
def save(name,w,h,body):
 (out/name).write_text(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" role="img" aria-label="MerchantReturns"><title>MerchantReturns — The Selvedge</title>{body}</svg>')
for name,p,s in [('forest',forest,sage),('ivory',ivory,'#BAC5AC'),('mono-forest',forest,forest),('mono-ivory',ivory,ivory),('black','#000','#000')]:
 save(f'symbol-{name}.svg',500,280,f'<g transform="translate(9 9)">{symbol(p,s)}</g>')
 save(f'logo-horizontal-{name}.svg',1240,180,f'<g transform="translate(10 31) scale(.45)">{symbol(p,s)}</g>'+word(257,122,965,p))
 save(f'logo-stacked-{name}.svg',1000,430,f'<g transform="translate(259 16)">{symbol(p,s)}</g>'+word(22,390,956,p))
 save(f'wordmark-{name}.svg',1000,150,word(10,112,980,p))
for name,bg,p,s in [('forest',forest,ivory,'#BAC5AC'),('ivory',ivory,forest,sage)]:
 save(f'favicon-{name}.svg',64,64,f'<rect width="64" height="64" rx="14" fill="{bg}"/><g transform="translate(6 17) scale(.108)">{symbol(p,s)}</g>')
save('favicon.svg',64,64,f'<rect width="64" height="64" rx="14" fill="{forest}"/><g transform="translate(6 17) scale(.108)">{symbol(ivory,"#BAC5AC")}</g>')
(out/'site.webmanifest').write_text(json.dumps({'name':'MerchantReturns','short_name':'MerchantReturns','start_url':'/','display':'standalone','background_color':ivory,'theme_color':forest,'icons':[{'src':'/brand/icon-192.png','sizes':'192x192','type':'image/png'},{'src':'/brand/icon-512.png','sizes':'512x512','type':'image/png'}]},indent=2))
(out/'README.txt').write_text('MerchantReturns / The Selvedge\nSelected concept 01, redrawn as editable vector paths.\nForest #193D32 / Sage #9DA78D / Ivory #F4F0E6.\nSVG wordmarks are outlined Newsreader Regular; no external fonts required.\nHorizontal, stacked, symbol and wordmark: forest, ivory, monochrome forest, monochrome ivory and black.\nUse ivory assets on dark surfaces. Never stretch or add shadows to the artwork.\nKeep clear space equal to one quarter of symbol height. Use favicon for small square applications.\nNewsreader is licensed under the SIL Open Font License; included alongside assets.\n')
licensepath=Path('node_modules/@fontsource/newsreader/LICENSE')
if licensepath.exists(): (out/'FONT-LICENSE.txt').write_text(licensepath.read_text())
# A share image is a real rendered brand asset, not the SVG used by web crawlers.
save('social-card.svg',1200,630,f'<rect width="1200" height="630" fill="{ivory}"/><g transform="translate(359 90)">{symbol()}</g>'+word(125,445,950,forest)+'<text x="600" y="530" text-anchor="middle" font-family="Arial,sans-serif" font-size="18" letter-spacing="4" fill="'+forest+'">CONSIDERED RETURN DECISIONS</text>')
