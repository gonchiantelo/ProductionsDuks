export default function MainContent() {
  return (
    <main className="main" dangerouslySetInnerHTML={{ __html: `

    <!-- ═══ GLOSARIO ═══ -->
    <div class="tab-panel active" id="panel-glosario">
      <div class="panel-hero">
        <h1>📖 Glosario</h1>
        <p>Todo lo que vas a ver explicado antes de empezar. Cada término técnico tiene su definición en español simple.</p>
      </div>
      <div class="glosario">
        <h2>📖 Glosario — Todo lo que vas a ver explicado antes de empezar</h2>
        <dl class="glos-grid">
          <div class="gterm"><dt>dB (decibel)</dt><dd>La unidad para medir <strong>volumen</strong>. 0 dB es el máximo antes de que el sonido se distorsione. -6 dB es la mitad de volumen. Los números negativos representan silencio progresivo.</dd></div>
          <div class="gterm"><dt>Hz (hertzio) / kHz</dt><dd>La unidad para medir <strong>frecuencia</strong> — es decir, el "tono" de un sonido. 20 Hz son los graves más profundos. 20.000 Hz (20 kHz) son los agudos más altos que el oído puede escuchar.</dd></div>
          <div class="gterm"><dt>ms (milisegundo)</dt><dd>Un milisegundo = 0.001 segundos. Se usa para medir qué tan rápido reacciona un plugin. <strong>1 ms es casi instantáneo</strong>; 200 ms ya son 2 décimas de segundo perceptibles.</dd></div>
          <div class="gterm"><dt>Threshold (umbral)</dt><dd>El punto de volumen a partir del cual el plugin <strong>empieza a actuar</strong>. Si el Threshold es -20 dB: el plugin hace algo cuando el sonido supera ese volumen y no hace nada cuando está por debajo.</dd></div>
          <div class="gterm"><dt>GR (Gain Reduction)</dt><dd><strong>Reducción de ganancia</strong> = cuánto volumen baja el compresor cuando actúa. <strong>NO es "Wet Gain" ni "Dry Gain"</strong>. Si el GR es -6 dB, el compresor bajó el volumen 6 dB en ese momento.</dd></div>
          <div class="gterm"><dt>Ratio</dt><dd>La "fuerza" del compresor. Un ratio de <strong>4:1</strong> significa que si el sonido sube 4 dB por encima del Threshold, el compresor solo deja pasar 1 dB. Cuanto más alto, más agresivo.</dd></div>
          <div class="gterm"><dt>Attack (ataque)</dt><dd>Cuántos milisegundos <strong>tarda el plugin en empezar</strong> a actuar una vez que la señal supera el Threshold. Attack rápido = reacciona casi al instante. Attack lento = deja pasar el inicio del sonido.</dd></div>
          <div class="gterm"><dt>Release (liberación)</dt><dd>Cuántos milisegundos tarda el plugin en <strong>dejar de actuar</strong> una vez que la señal baja del Threshold. Release corto = el plugin "suelta" rápido. Release largo = se queda actuando por más tiempo.</dd></div>
          <div class="gterm"><dt>Knee (rodilla)</dt><dd>Cómo entra en acción el compresor al llegar al Threshold. <strong>Hard knee</strong> = entra de golpe. <strong>Soft knee</strong> = entra gradualmente, más natural y musical.</dd></div>
          <div class="gterm"><dt>Gain / Makeup Gain</dt><dd>Como el compresor baja el volumen al actuar, el <strong>Makeup Gain</strong> es un botón para volver a subir el volumen general después de comprimir. Así compensás lo que bajó.</dd></div>
          <div class="gterm"><dt>LUFS</dt><dd>La unidad moderna para medir el <strong>volumen promedio de una canción entera</strong>. Spotify normaliza a -14 LUFS, YouTube a -13 LUFS. Es más preciso que el dB para canciones completas.</dd></div>
          <div class="gterm"><dt>True Peak (dBTP)</dt><dd>El <strong>pico real del audio</strong>, considerando lo que pasa entre muestras digitales. Siempre limitá a -1.0 dBTP (no 0 dBFS) para evitar distorsión invisible en plataformas de streaming.</dd></div>
          <div class="gterm"><dt>EQ (Ecualizador)</dt><dd>Herramienta para <strong>subir o bajar frecuencias específicas</strong> — como el ecualizador del auto pero mucho más preciso. Podés quitar el "barro" de la voz o agregarle brillo.</dd></div>
          <div class="gterm"><dt>Send / Bus auxiliar</dt><dd>En vez de poner el Reverb directamente en la voz, <strong>mandás una copia de la señal</strong> a un canal separado donde vive el Reverb. Así controlás cuánto reverb querés sin afectar la señal original.</dd></div>
          <div class="gterm"><dt>Sibilancias</dt><dd>Las "eses", "ts" y "ch" duras que en la grabación pueden sonar demasiado agudas y molestas. El De-esser las controla automáticamente.</dd></div>
          <div class="gterm"><dt>Pitch (afinación)</dt><dd>El "tono" de tu voz — si una nota está en Do, Si bemol, etc. <strong>Autotune y Melodyne</strong> corrigen las notas que no salen perfectamente afinadas.</dd></div>
          <div class="gterm"><dt>Stereo / Mono</dt><dd><strong>Stereo</strong> = el sonido tiene información diferente en el oído izquierdo y derecho. <strong>Mono</strong> = la misma información en ambos lados. Los graves siempre deben ser mono para funcionar bien en cualquier sistema.</dd></div>
          <div class="gterm"><dt>Gain Staging</dt><dd>El proceso de asegurarse de que <strong>el volumen de cada canal y plugin sea adecuado</strong> antes de pasar al siguiente. Evita saturar accidentalmente o perder calidad de sonido.</dd></div>
        </dl>
      </div>
    </div>

    <!-- ═══ MENTALIDAD ═══ -->
    <div class="tab-panel" id="panel-mentalidad">
      <div class="panel-hero">
        <h1>🧠 Mentalidad y Criterios</h1>
        <p>Cómo pensar cuando mezclás. Los errores mentales arruinan más mezclas que la falta de plugins.</p>
      </div>
      <div class="pcards" style="margin-bottom:40px">
        <div class="pcard">
          <div class="pcard-hd"><div class="pcard-title">🧠 Fatiga Auditiva — Tu oído miente después de horas de trabajo</div><div class="pcard-sub">El enemigo silencioso de toda mezcla casera</div></div>
          <div class="pcard-body">
            <p style="font-size:.85rem;color:var(--t2);line-height:1.7;margin-bottom:14px">El oído humano <strong style="color:var(--t1)">se adapta y se cansa</strong> igual que un músculo. Después de 45–60 minutos escuchando música a volumen alto, tu cerebro empieza a compensar lo que ya no escucha bien: los agudos parecen más brillantes de lo que son, los graves se vuelven confusos, y lo que suena "bien" a las 3 horas de sesión suena espantoso al día siguiente con oídos frescos.</p>
            <div class="alert ain"><span class="ai">💡</span><p><strong>La regla de oro:</strong> Descansá <strong>al menos 10 minutos cada hora</strong> de trabajo. Salí de la sala, tomá agua, alejate de los monitores. No es perder el tiempo — es proteger tu herramienta más importante: tu oído.</p></div>
            <div class="alert aw"><span class="ai">⚠️</span><p><strong>Señal de alarma:</strong> Si llevás más de 2 horas mezclando y todo te empieza a sonar "bien", es porque ya no estás escuchando con precisión. <strong>Guardá el proyecto y volvé mañana.</strong></p></div>
          </div>
        </div>
        <div class="pcard">
          <div class="pcard-hd"><div class="pcard-title">🔉 Volumen de Mezcla — Mezclá a volumen de conversación</div><div class="pcard-sub">El estándar profesional: 75–85 dB SPL</div></div>
          <div class="pcard-body">
            <p style="font-size:.85rem;color:var(--t2);line-height:1.7;margin-bottom:14px">Mezclar fuerte destruye tu oído más rápido, exagera los graves y los agudos (efecto Fletcher-Munson), y te da una falsa sensación de "potencia" que desaparece al reproducirlo en un teléfono. El estándar profesional es <strong style="color:var(--t1)">alrededor de 75–85 dB SPL</strong> — podés calibrarlo con una app de medición de dB en tu teléfono.</p>
            <div class="alert aok"><span class="ai">✅</span><p><strong>Test práctico:</strong> Si podés mantener una conversación normal sin gritar mientras la música suena, estás en el rango correcto. Subí el volumen solo para chequeos ocasionales.</p></div>
          </div>
        </div>
        <div class="pcard">
          <div class="pcard-hd"><div class="pcard-title">🚫 El Peligro del Botón "Solo" — Siempre mezclá en contexto</div><div class="pcard-sub">Lo que suena perfecto en solo puede arruinar la mezcla completa</div></div>
          <div class="pcard-body">
            <p style="font-size:.85rem;color:var(--t2);line-height:1.7;margin-bottom:14px">El botón <strong style="color:var(--t1)">"Solo"</strong> es útil para diagnosticar problemas específicos. Pero <strong style="color:var(--t1)">nunca debería usarse para tomar decisiones de EQ o compresión</strong>. Cuando escuchás la voz sola, tu cerebro la juzga como si fuera el único sonido del universo.</p>
            <div class="alert aer"><span class="ai">❌</span><p><strong>La regla:</strong> Apretá "Solo" para <em>identificar</em> un problema. Pero siempre <strong>quitá el Solo antes de ajustar cualquier parámetro</strong>. Todos tus cambios deben hacerse escuchando la voz junto al beat.</p></div>
          </div>
        </div>
        <div class="pcard">
          <div class="pcard-hd"><div class="pcard-title">🎯 Tracks de Referencia (A/B) — Tu brújula profesional</div><div class="pcard-sub">Importar una canción profesional al DAW para comparar en tiempo real</div></div>
          <div class="pcard-body">
            <p style="font-size:.85rem;color:var(--t2);line-height:1.7;margin-bottom:14px">La solución que usan todos los ingenieros profesionales es tener una <strong style="color:var(--t1)">canción de referencia</strong> — una producción profesional del mismo género — cargada en el DAW para comparar en todo momento.</p>
            <div class="notebox" style="margin-bottom:14px"><strong>¿Cómo hacerlo?</strong> Importá la canción de referencia en una pista separada del DAW. <strong>Bajale el volumen unos -6 dB</strong> para que esté al mismo nivel percibido que tu mezcla (las canciones masterizadas suenan más fuertes y ese volumen extra engaña al oído). Luego alternás entre tu mezcla y la referencia con un clic — eso se llama "A/B comparison".</div>
            <div class="alert ain"><span class="ai">💡</span><p><strong>Qué buscar al comparar:</strong> ¿Tu voz tiene la misma presencia? ¿Los graves tienen el mismo peso? No se trata de copiar — se trata de <strong>calibrar tu oído</strong> con algo que ya sabés que suena bien.</p></div>
          </div>
        </div>
        <div class="pcard">
          <div class="pcard-hd"><div class="pcard-title">👁️ Menos Ojos, Más Oídos — No te dejes engañar por las gráficas</div><div class="pcard-sub">Los plugins muestran gráficas bonitas — pero lo que importa es lo que escuchás</div></div>
          <div class="pcard-body">
            <p style="font-size:.85rem;color:var(--t2);line-height:1.7;margin-bottom:14px">Los plugins modernos como FabFilter tienen interfaces visuales increíbles. Son útiles para <em>aprender</em> qué hace cada plugin. Pero existe un peligro real: <strong style="color:var(--t1)">empezar a mezclar con los ojos en vez de con los oídos</strong>. Una curva de EQ que se ve simétrica puede sonar terrible.</p>
            <div class="alert ain"><span class="ai">💡</span><p><strong>El ejercicio:</strong> La próxima vez que uses un EQ o compresor, <strong>cerrá los ojos por 30 segundos</strong> mientras ajustás un parámetro. Solo escuchá. ¿Mejora o empeora? Las gráficas son guías — tus oídos son los jueces.</p></div>
          </div>
        </div>
      </div>
    </div>

    <!-- ═══ DIAGNOSTICO ═══ -->
    <div class="tab-panel" id="panel-diagnostico">
      <div class="panel-hero">
        <h1>🔧 Diagnóstico Auditivo</h1>
        <p>Si escuchás esto, hacé esto. Cada problema tiene un culpable específico y una corrección concreta.</p>
      </div>
      <div class="alert ain" style="margin-bottom:24px"><span class="ai">🔧</span><p><strong>Cómo usar esta sección:</strong> Escuchá tu mezcla, identificá el síntoma, y seguí la solución paso a paso. Solucioná <strong>un problema a la vez</strong> — dale play después de cada cambio.</p></div>
      <div class="gtable-wrap">
        <table class="gtable">
          <thead>
            <tr>
              <th style="width:5%"></th>
              <th style="width:26%">🔊 Si escuchás esto...</th>
              <th style="width:20%">🎯 El culpable es...</th>
              <th style="width:49%">✅ Cómo solucionarlo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align:center;font-size:1.2rem">🤖</td>
              <td><span style="font-weight:700;color:var(--t1)">Voz suena como robot con hipo o tiembla</span><div style="font-size:.72rem;color:var(--t3);margin-top:3px">Saltos mecánicos entre notas, vibrato artificial</div></td>
              <td><span style="font-family:'JetBrains Mono',monospace;font-size:.78rem;font-weight:700;color:var(--vocal)">Auto-Tune</span><div style="font-size:.72rem;color:var(--t3);margin-top:3px">Key/Scale incorrecta o Humanize en 0</div></td>
              <td><div class="alert aok" style="margin:0;padding:10px 14px"><span class="ai" style="font-size:.9rem">✅</span><p style="font-size:.78rem">Verificá que la <strong>Key</strong> coincida con la tonalidad del beat. Subí el <strong>Humanize</strong> a 40–60% para suavizar las notas largas. Si querés efecto robótico <em>deliberado</em>, dejá Retune Speed en 0; si no, poné 20–40.</p></div></td>
            </tr>
            <tr>
              <td style="text-align:center;font-size:1.2rem">🦷</td>
              <td><span style="font-weight:700;color:var(--t1)">Las "S" pinchan los tímpanos</span><div style="font-size:.72rem;color:var(--t3);margin-top:3px">Agudeza dolorosa en cada "s", "ts", "ch"</div></td>
              <td><span style="font-family:'JetBrains Mono',monospace;font-size:.78rem;font-weight:700;color:var(--vocal)">De-esser + EQ Post</span><div style="font-size:.72rem;color:var(--t3);margin-top:3px">Threshold del De-esser demasiado alto</div></td>
              <td><div class="alert aok" style="margin:0;padding:10px 14px"><span class="ai" style="font-size:.9rem">✅</span><p style="font-size:.78rem">En el <strong>De-esser</strong>: bajá el Threshold hasta que el indicador de reducción se mueva <em>solo</em> en las "S" duras. Rango de corte: <strong>-6 a -8 dB</strong>. Frecuencia objetivo: <strong>5–8 kHz</strong>.</p></div></td>
            </tr>
            <tr>
              <td style="text-align:center;font-size:1.2rem">🏺</td>
              <td><span style="font-weight:700;color:var(--t1)">Voz embotellada (como adentro de un tubo)</span><div style="font-size:.72rem;color:var(--t3);margin-top:3px">Sonido pastoso, opaco, sin claridad ni brillo</div></td>
              <td><span style="font-family:'JetBrains Mono',monospace;font-size:.78rem;font-weight:700;color:var(--vocal)">EQ Pre — zona de barro</span><div style="font-size:.72rem;color:var(--t3);margin-top:3px">Acumulación de frecuencias medias bajas</div></td>
              <td><div class="alert aok" style="margin:0;padding:10px 14px"><span class="ai" style="font-size:.9rem">✅</span><p style="font-size:.78rem">En el <strong>EQ Pre</strong>, agregá una banda Bell en <strong>300–500 Hz</strong> y cortá entre <strong>-2 y -4 dB</strong> (Q: 1.5). También revisá que el Low Cut esté activo en 100–120 Hz.</p></div></td>
            </tr>
            <tr>
              <td style="text-align:center;font-size:1.2rem">🙈</td>
              <td><span style="font-weight:700;color:var(--t1)">Voz escondida detrás del beat</span><div style="font-size:.72rem;color:var(--t3);margin-top:3px">La música aplasta la voz, no se entiende la letra</div></td>
              <td><span style="font-family:'JetBrains Mono',monospace;font-size:.78rem;font-weight:700;color:var(--vocal)">Compresión vocal + EQ del Beat</span><div style="font-size:.72rem;color:var(--t3);margin-top:3px">Voz sin comprimir y beat sin hueco para la voz</div></td>
              <td><div class="alert aok" style="margin:0;padding:10px 14px"><span class="ai" style="font-size:.9rem">✅</span><p style="font-size:.78rem"><strong>Dos acciones simultáneas:</strong> ① En el compresor vocal: ajustá el Threshold hasta ver <strong>GR de -4 a -8 dB</strong>. ② En el EQ del Beat: cortá <strong>-2 a -3 dB</strong> en una Bell centrada en <strong>2–3 kHz</strong>.</p></div></td>
            </tr>
            <tr>
              <td style="text-align:center;font-size:1.2rem">🚿</td>
              <td><span style="font-weight:700;color:var(--t1)">Reverb de "baño público"</span><div style="font-size:.72rem;color:var(--t3);margin-top:3px">La voz flota en una nube de eco que ensucia todo</div></td>
              <td><span style="font-family:'JetBrains Mono',monospace;font-size:.78rem;font-weight:700;color:var(--vocal)">Valhalla VintageVerb</span><div style="font-size:.72rem;color:var(--t3);margin-top:3px">Decay demasiado largo y graves sin filtrar</div></td>
              <td><div class="alert aok" style="margin:0;padding:10px 14px"><span class="ai" style="font-size:.9rem">✅</span><p style="font-size:.78rem">Acortá el <strong>Decay a máximo 1.5s</strong> (trap/reggaeton: 0.8–1.2s). Activá el <strong>Low Cut del canal de reverb a 150 Hz</strong>. Si usás Send, el Dry del canal auxiliar debe estar en 0%.</p></div></td>
            </tr>
            <tr>
              <td style="text-align:center;font-size:1.2rem">💨</td>
              <td><span style="font-weight:700;color:var(--t1)">Respiraciones como huracanes</span><div style="font-size:.72rem;color:var(--t3);margin-top:3px">Los respiros entre frases suenan más fuerte que la voz</div></td>
              <td><span style="font-family:'JetBrains Mono',monospace;font-size:.78rem;font-weight:700;color:var(--vocal)">Noise Gate inactivo</span><div style="font-size:.72rem;color:var(--t3);margin-top:3px">El gate no silencia el canal entre frases</div></td>
              <td><div class="alert aok" style="margin:0;padding:10px 14px"><span class="ai" style="font-size:.9rem">✅</span><p style="font-size:.78rem">En el <strong>Noise Gate (Pro-G)</strong>: bajá el Threshold hasta <strong>-40 dB</strong> y configurá la Reduction en <strong>-30 a -35 dB</strong> (no -100 dB — silencio total suena como "porteazos"). Hold: 60–80 ms.</p></div></td>
            </tr>
            <tr>
              <td style="text-align:center;font-size:1.2rem">💥</td>
              <td><span style="font-weight:700;color:var(--t1)">Beat ahogado o volumen que "bombea"</span><div style="font-size:.72rem;color:var(--t3);margin-top:3px">El volumen sube y baja en cada patada de bombo</div></td>
              <td><span style="font-family:'JetBrains Mono',monospace;font-size:.78rem;font-weight:700;color:var(--vocal)">Doble compresión en beat masterizado</span><div style="font-size:.72rem;color:var(--t3);margin-top:3px">Beat ya comprimido al que se le agrega otro compresor</div></td>
              <td><div class="alert aok" style="margin:0;padding:10px 14px"><span class="ai" style="font-size:.9rem">✅</span><p style="font-size:.78rem"><strong>Apagá el compresor del canal del Beat.</strong> Los beats descargados ya vienen masterizados. En el Master, verificá que el Limitador no esté reduciendo más de <strong>-3 dB</strong> continuamente.</p></div></td>
            </tr>
            <tr>
              <td style="text-align:center;font-size:1.2rem">🎤</td>
              <td><span style="font-weight:700;color:var(--t1)">Voz "karaoke barato" pegada sobre la música</span><div style="font-size:.72rem;color:var(--t3);margin-top:3px">La voz suena separada del beat, como dos elementos distintos</div></td>
              <td><span style="font-family:'JetBrains Mono',monospace;font-size:.78rem;font-weight:700;color:var(--vocal)">Falta de Glue en el Master</span><div style="font-size:.72rem;color:var(--t3);margin-top:3px">Sin compresión de bus, los elementos no se "pegan"</div></td>
              <td><div class="alert aok" style="margin:0;padding:10px 14px"><span class="ai" style="font-size:.9rem">✅</span><p style="font-size:.78rem">En el <strong>Canal Master</strong>, activá el Glue Compressor (Pro-C 2 en modo <em>Bus</em>): Threshold hasta ver <strong>GR de -1 a -2 dB</strong>, Ratio 2:1, Attack 30 ms, Release 100 ms.</p></div></td>
            </tr>
            <tr>
              <td style="text-align:center;font-size:1.2rem">📡</td>
              <td><span style="font-weight:700;color:var(--t1)">Distorsión o crujidos al máximo volumen</span><div style="font-size:.72rem;color:var(--t3);margin-top:3px">Clipping digital — sonido roto e irreparable si se exporta así</div></td>
              <td><span style="font-family:'JetBrains Mono',monospace;font-size:.78rem;font-weight:700;color:var(--vocal)">Limitador (Pro-L 2) sobrecargado</span><div style="font-size:.72rem;color:var(--t3);margin-top:3px">El techo del Limitador está en 0 dBFS o la señal lo satura</div></td>
              <td><div class="alert aer" style="margin:0;padding:10px 14px"><span class="ai" style="font-size:.9rem">❌</span><p style="font-size:.78rem"><strong>Urgente:</strong> Activá <strong>True Peak Limiting</strong> y fijá el techo en <strong>-1.0 dBTP</strong>. Si sigue rompiendo, <strong>bajá los faders de todos los canales 2–3 dB</strong>. El Limitador es la última línea de defensa, no el regulador de volumen.</p></div></td>
            </tr>
            <tr>
              <td style="text-align:center;font-size:1.2rem">📱</td>
              <td><span style="font-weight:700;color:var(--t1)">Gigante en auriculares, sin bajos en el celular</span><div style="font-size:.72rem;color:var(--t3);margin-top:3px">Los graves desaparecen en reproducción mono</div></td>
              <td><span style="font-family:'JetBrains Mono',monospace;font-size:.78rem;font-weight:700;color:var(--vocal)">Cancelación de fase — graves en estéreo</span><div style="font-size:.72rem;color:var(--t3);margin-top:3px">Sub-bass con información estéreo que se cancela al sumar L+R</div></td>
              <td><div class="alert aok" style="margin:0;padding:10px 14px"><span class="ai" style="font-size:.9rem">✅</span><p style="font-size:.78rem">En el <strong>Pro-Q 3 del Master</strong>: cambiá el modo a <strong>Mid/Side (M/S)</strong>. Seleccioná el canal <strong>Side (S)</strong> y aplicá un <strong>Low Cut agresivo a 120 Hz</strong> (pendiente 24 dB/oct). Esto fuerza el sub-bass a Mono.</p></div></td>
            </tr>
            <tr>
              <td style="text-align:center;font-size:1.2rem">🔁</td>
              <td><span style="font-weight:700;color:var(--t1)">Delay que se come la letra — eco infinito</span><div style="font-size:.72rem;color:var(--t3);margin-top:3px">Los ecos se acumulan y tapan la siguiente frase</div></td>
              <td><span style="font-family:'JetBrains Mono',monospace;font-size:.78rem;font-weight:700;color:var(--vocal)">Delay no sincronizado + Feedback alto</span><div style="font-size:.72rem;color:var(--t3);margin-top:3px">Tiempo de delay no coincide con el tempo del beat</div></td>
              <td><div class="alert aok" style="margin:0;padding:10px 14px"><span class="ai" style="font-size:.9rem">✅</span><p style="font-size:.78rem">Sincronizá el delay al tempo: usá <strong>Sync On</strong> y elegí <strong>1/8 o 1/4 note</strong>. Bajá el <strong>Feedback a máximo 25–30%</strong>. En el canal auxiliar del delay, aplicá un <strong>High Cut a 8 kHz</strong> para que los ecos no compitan con la voz.</p></div></td>
            </tr>
            <tr>
              <td style="text-align:center;font-size:1.2rem">🏜️</td>
              <td><span style="font-weight:700;color:var(--t1)">Voz demasiado seca y sin espacio</span><div style="font-size:.72rem;color:var(--t3);margin-top:3px">Suena grabada en un cuarto muerto, plana y sin vida</div></td>
              <td><span style="font-family:'JetBrains Mono',monospace;font-size:.78rem;font-weight:700;color:var(--vocal)">Sin Reverb/Delay de ambientación</span><div style="font-size:.72rem;color:var(--t3);margin-top:3px">Mezcla totalmente dry sin ningún efecto de espacio</div></td>
              <td><div class="alert aok" style="margin:0;padding:10px 14px"><span class="ai" style="font-size:.9rem">✅</span><p style="font-size:.78rem">Usá una <strong>reverb corta tipo "Room"</strong> (Decay 0.6–0.9s) como base. Mandala siempre por <strong>Send/Bus auxiliar</strong>. El nivel del bus de reverb no debería superar los <strong>-12 a -15 dB</strong> en el fader.</p></div></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="alert aw" style="margin-top:20px"><span class="ai">⚠️</span><p><strong>Regla de oro del troubleshooting:</strong> Siempre solucioná <strong>un problema a la vez</strong> y dale play a la mezcla completa después de cada cambio. Guardá versiones antes de hacer cambios grandes — en Logic usá <em>"Guardar como"</em> con un número de versión.</p></div>
    </div>

    <!-- ═══ CADENA ═══ -->
    <div class="tab-panel" id="panel-cadena">
      <div class="panel-hero">
        <h1>🔗 Cadena de Señal</h1>
        <p>El orden correcto de los plugins en cada canal. Este orden no es arbitrario — cada plugin trabaja sobre lo que le llega del anterior.</p>
      </div>
      <div class="chain-vis">
        <div class="ch-col vc">
          <div class="ch-head" style="cursor:pointer" data-nav="vocal" title="Ir al Canal Vocal"><span style="font-size:1.3rem">🎤</span><div class="ch-head-txt"><div class="ch-name" style="color:var(--vocal)">Canal Vocal</div><div class="ch-sub">Tu voz grabada — en este orden</div></div></div>
          <div class="ch-slots">
            <div class="ch-slot slot-new" data-nav="vocal" title="Ver Melodyne"><div class="sn">M</div><div><div class="sp">Melodyne (ARA2)</div><div class="sr">Corrección de afinación nota por nota — antes de todo</div></div></div>
            <div class="ch-slot" data-nav="vocal" title="Ver EQ Pre"><div class="sn">1</div><div><div class="sp">EQ (Ecualización Pre)</div><div class="sr">Limpieza de frecuencias no deseadas</div></div></div>
            <div class="ch-slot" data-nav="vocal" title="Ver Noise Gate"><div class="sn">2</div><div><div class="sp">Noise Gate</div><div class="sr">Silencia el ruido de fondo entre frases</div></div></div>
            <div class="ch-slot" data-nav="vocal" title="Ver De-esser"><div class="sn">3</div><div><div class="sp">De-esser</div><div class="sr">Controla las "s" y "ts" duras</div></div></div>
            <div class="ch-slot slot-new" data-nav="vocal" title="Ver Autotune"><div class="sn">A</div><div><div class="sp">Autotune</div><div class="sr">Afinación en tiempo real — estilo o corrección</div></div></div>
            <div class="ch-slot" data-nav="vocal" title="Ver Compresor Vocal"><div class="sn">4</div><div><div class="sp">Compresor</div><div class="sr">Empareja las diferencias de volumen de la voz</div></div></div>
            <div class="ch-slot" data-nav="vocal" title="Ver EQ Post"><div class="sn">5</div><div><div class="sp">EQ (Post-Compresión)</div><div class="sr">Ajuste de brillo y presencia final</div></div></div>
            <div class="ch-slot" data-nav="vocal" title="Ver Saturación"><div class="sn">6</div><div><div class="sp">Saturación</div><div class="sr">Calidez y armónicos analógicos</div></div></div>
            <div class="ch-slot" data-nav="vocal" title="Ver Reverb"><div class="sn">→</div><div><div class="sp">Reverb (canal auxiliar)</div><div class="sr">Espacio y ambiente — no en insert directo</div></div></div>
            <div class="ch-slot" data-nav="vocal" title="Ver Delay"><div class="sn">→</div><div><div class="sp">Delay (canal auxiliar)</div><div class="sr">Eco rítmico sincronizado al beat</div></div></div>
          </div>
        </div>
        <div class="ch-col bc">
          <div class="ch-head" style="cursor:pointer" data-nav="beat" title="Ir al Canal Beat"><span style="font-size:1.3rem">🎵</span><div class="ch-head-txt"><div class="ch-name" style="color:var(--beat)">Canal Beat</div><div class="ch-sub">Beat descargado — trátalo con cuidado</div></div></div>
          <div class="ch-slots">
            <div class="ch-slot" data-nav="beat" title="Ver Preparación del Beat"><div class="sn">P</div><div><div class="sp">Preparación (antes del DAW)</div><div class="sr">Revisar nivel, formato y si ya está masterizado</div></div></div>
            <div class="ch-slot" data-nav="beat" title="Ver EQ Beat"><div class="sn">1</div><div><div class="sp">EQ — Hueco para la voz</div><div class="sr">Bajar las frecuencias donde va a vivir la voz</div></div></div>
            <div class="ch-slot" data-nav="beat" title="Ver Compresor Beat"><div class="sn">2</div><div><div class="sp">Compresor (suave)</div><div class="sr">Solo si el beat no viene ya masterizado</div></div></div>
            <div class="ch-slot" data-nav="beat" title="Ver Stereo Imager"><div class="sn">3</div><div><div class="sp">Stereo Imager</div><div class="sr">Controla el ancho del beat en el espacio estéreo</div></div></div>
            <div class="ch-slot" data-nav="beat" title="Ver Fader"><div class="sn">4</div><div><div class="sp">Fader de volumen</div><div class="sr">Empezá en -6 dB debajo de donde tenés la voz</div></div></div>
          </div>
        </div>
        <div class="ch-col mc">
          <div class="ch-head" style="cursor:pointer" data-nav="master" title="Ir al Canal Master"><span style="font-size:1.3rem">🎚️</span><div class="ch-head-txt"><div class="ch-name" style="color:var(--mast)">Canal Master</div><div class="ch-sub">Suma final de todo — 4 plugins</div></div></div>
          <div class="ch-slots">
            <div class="ch-slot" data-nav="master" title="Ver EQ Master"><div class="sn">1</div><div><div class="sp">EQ Master</div><div class="sr">Balance espectral final de la mezcla</div></div></div>
            <div class="ch-slot" data-nav="master" title="Ver Glue Compressor"><div class="sn">2</div><div><div class="sp">Glue Compressor</div><div class="sr">"Pega" la voz y el beat como una sola canción</div></div></div>
            <div class="ch-slot" data-nav="master" title="Ver Stereo Imager"><div class="sn">3</div><div><div class="sp">Stereo Imager</div><div class="sr">Imagen estéreo final — graves en mono</div></div></div>
            <div class="ch-slot" data-nav="master" title="Ver Limiter"><div class="sn">4</div><div><div class="sp">Limiter — ÚLTIMO SIEMPRE</div><div class="sr">Techo de volumen para streaming</div></div></div>
          </div>
        </div>
      </div>
    </div>

    <!-- ═══ VOCAL ═══ -->
    <div class="tab-panel" id="panel-vocal">
      <div class="panel-hero">
        <h1>🎤 Canal Vocal</h1>
        <p>Melodyne, Autotune, EQ, Gate, De-esser, Compresor, Saturación, Reverb y Delay — todos explicados en detalle.</p>
      </div>
      <div class="alert ain" style="margin-bottom:28px"><span class="ai">💡</span><p><strong>¿Qué plugins usar?</strong><br>
<strong>Corrección de afinación:</strong> <em>Melodyne 5</em> (ARA2, recomendado) o <em>Autotune Pro</em> (tiempo real).<br>
<strong>EQ Pre / Post:</strong> <em>FabFilter Pro-Q 3</em> (recomendado) o <em>Channel EQ</em> de Logic.<br>
<strong>Noise Gate:</strong> <em>FabFilter Pro-G</em> (recomendado) o <em>Noise Gate</em> nativo de Logic.<br>
<strong>De-esser:</strong> <em>FabFilter Pro-DS</em> (recomendado) o <em>Waves Renaissance DeEsser</em>.<br>
<strong>Compresor vocal:</strong> <em>FabFilter Pro-C 2</em> (recomendado) · <em>Waves CLA-76</em> · <em>UAD 1176</em> · <em>Compressor</em> de Logic (modelo Vintage VCA).<br>
<strong>Saturación:</strong> <em>Slate Virtual Console</em> · <em>Softube Saturation Knob</em> (gratis) · <em>Waves J37 Tape</em>.<br>
<strong>Reverb:</strong> <em>Valhalla VintageVerb</em> (recomendado) · <em>Valhalla Room</em> · <em>FabFilter Pro-R 2</em> · <em>Lexicon Plugin Bundle</em>.<br>
<strong>Delay:</strong> <em>Valhalla Delay</em> (recomendado) · <em>Soundtoys EchoBoy</em> · <em>FabFilter Timeless 3</em> · <em>Stereo Delay</em> de Logic.</p></div>

      <!-- MELODYNE -->
      <div class="pcard" style="margin-bottom:18px">
        <div class="pcard-hd">
          <div class="chtag chtag-v">🎤 Vocal — Antes del Slot 1</div>
          <div class="pcard-title">🎵 Melodyne — Corrección de afinación quirúrgica</div>
          <div class="pcard-sub">Celemony Melodyne 5 / Studio / Essential • Se usa como ARA2 o proceso offline</div>
        </div>
        <div class="pcard-body">
          <div class="plugin-ui">
            <div class="pui-bar"><span class="pui-brand">celemony melodyne 5</span><span class="pui-name">Editor de notas — vista principal</span></div>
            <div class="pui-body" style="padding:0"><canvas id="melodyneCanvas" width="700" height="160" style="width:100%;height:160px;display:block"></canvas></div>
          </div>
          <div class="alert ain"><span class="ai">💡</span><p><strong>¿Qué hace Melodyne?</strong> Te muestra cada nota que cantaste como una "gota" o "blob" visual. Podés ver exactamente qué tan afinada estuvo cada nota y corregirla arrastrándola con el mouse. Es como editar texto pero para la afinación de tu voz.</p></div>
          <table class="ptable" style="margin-top:14px">
            <tr><td class="pk">¿Dónde va en la cadena?</td><td class="pv">Antes de todo</td><td class="pp">Melodyne edita el audio de la grabación directamente, antes de que cualquier plugin lo procese. En DAWs como Logic Pro, Studio One o Cubase lo activás con clic derecho → "Editar con Melodyne" (ARA2).</td></tr>
            <tr><td class="pk">Retune Speed</td><td class="pv" id="mv-retune">50–70%</td><td class="pp">Qué tan rápido corrige cada nota. <strong>100% = robótico e instantáneo</strong>. 50–70% = corrección natural que suena humana. Para pop, 80–90%. Para salsa, 40–60% para preservar el estilo.</td></tr>
            <tr><td class="pk">Formant</td><td class="pv">0% (no tocar)</td><td class="pp">Cambia el "color" o "timbre" de la voz además de la afinación. <strong>No tocarlo</strong> a menos que sepas qué hacés — puede sonar artificial muy fácil.</td></tr>
            <tr><td class="pk">Correction Pitch (manual)</td><td class="pv">Arrastrar blobs</td><td class="pp">Si una nota está desafinada, hacé clic en el "blob" (la forma de la nota) y arrastrálo hacia arriba o abajo hasta la línea de la nota correcta. La cuadrícula horizontal muestra cada nota musical (Do, Re, Mi…).</td></tr>
            <tr><td class="pk">Melodyne vs Autotune</td><td class="pv">Melodyne = quirúrgico</td><td class="pp"><strong>Melodyne</strong> = para corregir nota por nota con precisión, de forma "invisible". <strong>Autotune</strong> = puede ser el efecto robótico del trap/reggaeton O una corrección rápida en tiempo real.</td></tr>
          </table>

          <!-- NUEVAS HERRAMIENTAS DE AFINACIÓN MELODYNE -->
          <div class="div" style="margin:20px 0"></div>
          <div style="background:var(--bg3);border:1px solid var(--border2);border-radius:var(--r2);padding:18px 20px;margin-bottom:14px">
            <div style="font-size:.75rem;font-weight:800;color:var(--ff-gold);letter-spacing:.08em;text-transform:uppercase;margin-bottom:14px">🛠️ Herramientas de Afinación — Las 3 que más vas a usar</div>
            <div style="display:grid;gap:12px">
              <div style="background:var(--bg2);border-radius:var(--r);padding:14px 16px;border:1px solid var(--border)">
                <div style="font-family:'JetBrains Mono',monospace;font-size:.75rem;font-weight:700;color:var(--vocal);margin-bottom:6px">Pitch Drift (Deriva de afinación)</div>
                <p style="font-size:.78rem;color:var(--t2);line-height:1.6">Con esta herramienta seleccionás un blob y bajás la <strong style="color:var(--t1)">Pitch Drift al 0%</strong>. Esto centra la nota completamente recta en la línea de la nota correcta — sin variaciones ascendentes ni descendentes dentro de esa nota. Usalo en notas que "se escapan" gradualmente del centro. <em>Truco: usalo con cuidado en salsa, el drift natural es parte del estilo.</em></p>
              </div>
              <div style="background:var(--bg2);border-radius:var(--r);padding:14px 16px;border:1px solid var(--border)">
                <div style="font-family:'JetBrains Mono',monospace;font-size:.75rem;font-weight:700;color:var(--vocal);margin-bottom:6px">Modulación / Fluctuación (Pitch Modulation)</div>
                <p style="font-size:.78rem;color:var(--t2);line-height:1.6">Esta herramienta controla el <strong style="color:var(--t1)">vibrato natural de la voz</strong>. Bajando la Modulación al <strong style="color:var(--t1)">0%</strong> eliminás completamente el vibrato — la nota queda completamente estática. En trap/urbano puede ser lo que querés. En pop y salsa, reducilo a 50% en vez de eliminarlo — el vibrato natural hace que la voz suene viva. Si el vibrato es muy pronunciado y suena involuntario, bajalo al 30–50% para suavizarlo sin eliminarlo.</p>
              </div>
              <div style="background:var(--bg2);border-radius:var(--r);padding:14px 16px;border:1px solid var(--border)">
                <div style="font-family:'JetBrains Mono',monospace;font-size:.75rem;font-weight:700;color:var(--vocal);margin-bottom:6px">Herramienta de Separación (Separation Tool)</div>
                <p style="font-size:.78rem;color:var(--t2);line-height:1.6">Cuando dos sílabas que deberían estar en notas distintas aparecen como un solo blob en Melodyne, usás la <strong style="color:var(--t1)">Herramienta de Separación</strong> para dividirlas. Hacé clic en el punto exacto donde comienza la nueva sílaba y Melodyne corta el blob en dos notas independientes que podés ajustar por separado. Es esencial cuando el cantante mezcló dos notas en un solo sonido.</p>
              </div>
            </div>
          </div>
          <div class="alert ain"><span class="ai">🎵</span><p><strong>¿Cómo saber cuál es la nota correcta?</strong> La nota correcta es la que <strong>no genera disonancia</strong> — es decir, la que no "choca" con los acordes del beat en ese momento. Si no tenés oído desarrollado aún, usá un plugin de detección de tonalidad como <strong>Auto-Key de Antares</strong> en el canal del beat para saber exactamente qué escala está usando el beat. Luego en Melodyne revisá que tus notas caigan dentro de esa escala.</p></div>
          <div class="notebox"><strong>¿Podés usar los dos (Melodyne + Autotune) al mismo tiempo?</strong> Sí, es lo más común en producción profesional. Usás Melodyne primero para corregir las notas muy desafinadas (de forma imperceptible), y luego Autotune en el canal de plugins para el estilo o para la corrección residual en tiempo real.</div>
        </div>
      </div>

      <!-- AUTOTUNE -->
      <div class="pcard" style="margin-bottom:18px">
        <div class="pcard-hd">
          <div class="chtag chtag-v">🎤 Vocal — Slot A (después del De-esser)</div>
          <div class="pcard-title">🎤 Autotune — Afinación en tiempo real</div>
          <div class="pcard-sub">Antares Autotune Pro / Access • Antes del compresor — el compresor trabaja sobre la voz ya afinada</div>
        </div>
        <div class="pcard-body">
          <div class="plugin-ui">
            <div class="pui-bar"><span class="pui-brand">antares autotune pro</span><span class="pui-name">Auto Mode — Pitch Correction</span></div>
            <div class="pui-body" style="padding:0"><canvas id="autotuneCanvas" width="700" height="140" style="width:100%;height:140px;display:block"></canvas></div>
          </div>
          <table class="ptable" style="margin-top:10px">
            <tr><td class="pk">Key (Tonalidad)</td><td class="pv" id="av-key">La tonalidad del beat</td><td class="pp"><strong>MUY IMPORTANTE:</strong> Poner la tonalidad equivocada es el error #1. La "Key" le dice a Autotune a qué notas puede corregir tu voz. Si el beat está en Do menor, ponés Key = C, Scale = Minor. Si no sabés la tonalidad, usás "Chromatic".</td></tr>
            <tr><td class="pk">Retune Speed</td><td class="pv" id="av-retune">10–20 (natural)</td><td class="pp">La velocidad de corrección. <strong>0 = el efecto robótico del trap/reggaeton</strong> (T-Pain, J Balvin). 20–50 = corrección sutil que suena natural. 100 = tan lento que casi no hace nada. La escala es al revés: más bajo = más rápido.</td></tr>
            <tr><td class="pk">Flex-Tune</td><td class="pv" id="av-flex">50–70%</td><td class="pp">Cuánta "libertad" le das a tu voz para moverse entre notas antes de que Autotune la corrija. Más alto = más natural y con más feeling. Más bajo = más controlado y perfecto.</td></tr>
            <tr><td class="pk">Humanize</td><td class="pv" id="av-hum">30–60%</td><td class="pp">Simula las variaciones naturales del canto humano para que el Autotune no suene robótico en las notas largas. Subilo en notas sustentadas largas.</td></tr>
            <tr><td class="pk">Transpose</td><td class="pv">0</td><td class="pp">Sube o baja toda la voz en semitonos. Solo tocarlo si querés cambiar la tonalidad de la voz, no para corrección normal.</td></tr>
          </table>
          <div class="alert aok"><span class="ai">✅</span><p><strong>Cuándo va el Autotune en la cadena:</strong> Después del De-esser y ANTES del compresor. El compresor debe trabajar sobre la voz ya afinada para mayor consistencia.</p></div>
          <div class="alert aw"><span class="ai">⚠️</span><p><strong>El efecto robótico (tipo trap):</strong> Para conseguirlo deliberadamente, ponés el Retune Speed en 0, la Key en la tonalidad correcta, y el Flex-Tune en 0. Si querés corrección natural e imperceptible, ponés Retune Speed en 30–50 y Flex-Tune en 60%.</p></div>
        </div>
      </div>

      <div class="sec-label"><span>Canal Vocal — EQ, Gate, De-esser, Compresor</span></div>
      <div class="pcards g2">
        <!-- EQ PRE -->
        <div class="pcard">
          <div class="pcard-hd"><div class="chtag chtag-v">Slot 1</div><div class="pcard-title">🎚️ EQ Pre — Limpieza de frecuencias</div><div class="pcard-sub">FabFilter Pro-Q 3 — corrección antes de comprimir</div></div>
          <div class="pcard-body">
            <div class="eq-ui"><canvas class="eq-canvas-el" id="eqVocalPre" width="700" height="150"></canvas><div class="eq-freqlabel"><span>20Hz</span><span>60</span><span>120</span><span>300</span><span>600</span><span>1k</span><span>3k</span><span>6k</span><span>12k</span><span>20kHz</span></div></div>
            <table class="ptable">
              <tr><td class="pk">Low Cut (Corte de graves)</td><td class="pv" id="ev1-lc">100–120 Hz</td><td class="pp">Corta todo lo que hay debajo de esta frecuencia. Elimina el <strong>ruido de fondo, golpes, ventiladores y vibraciones del cuarto</strong>. Pendiente: 18 dB/oct (suave).</td></tr>
              <tr><td class="pk">Corte de "barro"</td><td class="pv" id="ev1-mud">-2 dB @ 280–350 Hz</td><td class="pp">La zona de 250–400 Hz es donde vive el sonido de "<strong>cuarto sin tratar</strong>" — ese color apagado y pastoso. Bajá unos 2 dB en esa zona (tipo Bell, Q 1.5–2.0).</td></tr>
              <tr><td class="pk">High Shelf (Brillo/Aire)</td><td class="pv" id="ev1-hs">+2 a +3 dB @ 7kHz</td><td class="pp">Sube todo lo que está arriba de 7.000 Hz de forma gradual. Esto da la sensación de <strong>brillo, presencia y "aire"</strong> a la voz. Tipo: "High Shelf". Q: 0.7–0.8.</td></tr>
            </table>
            <div class="alert aer"><span class="ai">❌</span><p><strong>Error más común:</strong> Poner el tipo de banda en "High Cut" en vez de "High Shelf". El High Cut <em>borra</em> todo lo de arriba. El High Shelf solo <em>sube</em> esa zona.</p></div>
          </div>
        </div>
        <!-- NOISE GATE -->
        <div class="pcard">
          <div class="pcard-hd"><div class="chtag chtag-v">Slot 2</div><div class="pcard-title">🚪 Noise Gate — Silencia el ruido entre frases</div><div class="pcard-sub">FabFilter Pro-G — cierra el canal cuando no cantás</div></div>
          <div class="pcard-body">
            <div class="plugin-ui"><div class="pui-bar"><span class="pui-brand">fabfilter pro·g</span><span class="pui-name">Gate / Expander</span></div><div class="pui-body"><canvas id="gateCanvas" width="700" height="120" style="width:100%;height:120px;display:block"></canvas><div class="ff-knobs" id="gateKnobs"></div></div></div>
            <table class="ptable">
              <tr><td class="pk">Threshold (Umbral)</td><td class="pv">-40 dB</td><td class="pp">El volumen por debajo del cual el gate <strong>cierra el canal</strong>.</td></tr>
              <tr><td class="pk">Reduction (Reducción)</td><td class="pv">-30 a -35 dB</td><td class="pp"><strong>Cuánto baja el volumen cuando el gate cierra.</strong> Con -32 dB, el gate baja el volumen pero no hasta el silencio, y las transiciones son mucho más naturales.</td></tr>
              <tr><td class="pk">Attack (ms)</td><td class="pv">3 ms</td><td class="pp">Cuánto tarda el gate en <strong>abrirse</strong> cuando empieza tu voz.</td></tr>
              <tr><td class="pk">Hold (ms)</td><td class="pv">60–80 ms</td><td class="pp"><strong>Cuánto tiempo el gate se mantiene abierto después de que la señal baja del Threshold.</strong> Sin Hold suficiente, el gate parpadea en consonantes suaves.</td></tr>
              <tr><td class="pk">Release (ms)</td><td class="pv">100–150 ms</td><td class="pp"><strong>Cuánto tarda el gate en cerrarse</strong> después del Hold. 120 ms = el gate se cierra gradualmente, más natural.</td></tr>
            </table>
            <div class="alert ain"><span class="ai">💡</span><p><strong>Cómo saber que está bien:</strong> Dale play a la pista completa. El indicador verde del gate debe cerrarse en los silencios entre frases. Si parpadea en medio de una frase, aumentá el Hold.</p></div>
          </div>
        </div>
      </div>

      <div class="pcards g2" style="margin-top:18px">
        <!-- DE-ESSER -->
        <div class="pcard">
          <div class="pcard-hd"><div class="chtag chtag-v">Slot 3</div><div class="pcard-title">🦷 De-esser — Controla las "S" y "TS"</div><div class="pcard-sub">FabFilter Pro-DS / Waves Renaissance DeEsser — actúa solo en las sibilancias</div></div>
          <div class="pcard-body">
            <div class="eq-ui"><canvas class="eq-canvas-el" id="eqDeesser" width="700" height="150"></canvas><div class="eq-freqlabel"><span>20Hz</span><span>60</span><span>120</span><span>300</span><span>600</span><span>1k</span><span>3k</span><span>6k</span><span>12k</span><span>20kHz</span></div></div>
            <table class="ptable">
              <tr><td class="pk">Frecuencia objetivo</td><td class="pv">5.000–8.000 Hz</td><td class="pp">Dónde viven las sibilancias de <em>tu</em> voz. Para encontrarlo: cantá una "ssssss" sostenida, mirá el analizador de espectro del Pro-Q 3 y fijate <strong>cuál es el pico más alto entre 4.000 y 10.000 Hz</strong>. Esa es tu frecuencia.</td></tr>
              <tr><td class="pk">Threshold</td><td class="pv">-20 a -25 dB</td><td class="pp">Bajalo hasta que veas que el indicador de reducción se mueve <strong>solo en las "S" duras</strong>, no siempre.</td></tr>
              <tr><td class="pk">Rango de corte</td><td class="pv">-6 a -8 dB</td><td class="pp">Cuánto baja el de-esser las sibilancias. -6 dB es moderado y natural.</td></tr>
              <tr><td class="pk">Modo Wideband vs Split</td><td class="pv">Wideband</td><td class="pp"><strong>Wideband</strong> = cuando actúa, baja un poco todo el volumen de la voz por un instante. Más natural. <strong>Split</strong> = solo baja la frecuencia de sibilancia.</td></tr>
            </table>
          </div>
        </div>
        <!-- COMPRESOR VOCAL -->
        <div class="pcard">
          <div class="pcard-hd"><div class="chtag chtag-v">Slot 4</div><div class="pcard-title">🗜️ Compresor Vocal — FabFilter Pro-C 2</div><div class="pcard-sub">Empareja el volumen de la voz — las partes fuertes y débiles quedan al mismo nivel</div></div>
          <div class="pcard-body">
            <div class="plugin-ui"><div class="pui-bar"><span class="pui-brand">fabfilter pro·c²</span><span class="pui-name">Compressor / Limiter</span></div><div class="pui-body" style="padding:10px 14px"><div class="comp-display"><canvas class="comp-canvas-el" id="compVocal" width="700" height="140"></canvas></div><div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><span style="font-size:.72rem;color:var(--t3);font-weight:600">GR (reducción de ganancia en este momento):</span><div class="gr-meter" style="flex:1"><div class="gr-meter-bar" id="grVocalBar" style="width:30%"></div><div class="gr-meter-label">0 dB ——————————— -12 dB</div></div></div><div class="ff-knobs" id="compVocalKnobs"></div></div></div>
            <table class="ptable">
              <tr><td class="pk">Threshold (Umbral)</td><td class="pv" id="cv-thresh">-18 a -24 dB</td><td class="pp">Ajustá hasta ver un <strong>GR de -4 a -8 dB en los momentos más fuertes.</strong></td></tr>
              <tr><td class="pk">Ratio</td><td class="pv" id="cv-ratio">3:1 – 4:1</td><td class="pp">La "fuerza" del compresor. <strong>3:1 significa</strong>: por cada 3 dB que la voz sube por encima del Threshold, el compresor solo deja pasar 1 dB.</td></tr>
              <tr><td class="pk">Attack (Ataque)</td><td class="pv" id="cv-att">20–30 ms</td><td class="pp">Un Attack de 25 ms deja pasar el inicio de cada sílaba (el "punch" natural de la voz) y comprime el cuerpo de la nota.</td></tr>
              <tr><td class="pk">Release (Liberación)</td><td class="pv" id="cv-rel">70–100 ms</td><td class="pp">80 ms = musical, respira entre palabras. 10 ms = puede sonar como un "bombeo".</td></tr>
              <tr><td class="pk">Makeup Gain</td><td class="pv">+2 a +4 dB</td><td class="pp">Subilo hasta que la voz comprimida tenga el mismo volumen percibido que sin comprimir.</td></tr>
              <tr><td class="pk">Knee (Rodilla)</td><td class="pv">Soft</td><td class="pp"><strong>Soft Knee</strong> = el compresor entra gradualmente — suena natural. Para voz, Soft siempre.</td></tr>
            </table>
            <div class="notebox"><strong>Cómo saber que el GR está bien:</strong> Querés ver <strong>-4 a -8 dB de GR en los momentos más fuertes de la voz</strong>. Si el medidor de GR llega a -15, estás aplastando demasiado la voz.</div>

            <div class="div" style="margin:20px 0"></div>
            <div style="background:var(--bg3);border:1px solid var(--border2);border-radius:var(--r2);padding:18px 20px;margin-bottom:14px">
              <div style="font-size:.75rem;font-weight:800;color:var(--ff-gold);letter-spacing:.08em;text-transform:uppercase;margin-bottom:6px">🎛️ Presets Vocals del Pro-C 2 — ¿Cuál elegir?</div>
              <div style="font-size:.75rem;color:var(--t3);margin-bottom:16px">La tonalidad de la canción (Sol mayor, Do menor, etc.) <strong style="color:var(--t2)">no afecta la elección del preset</strong> — el compresor responde a la <em>dinámica</em> (volúmenes fuertes y suaves), no al pitch. Elegís según el <strong style="color:var(--t2)">estilo de la voz y el género</strong>.</div>
              <table class="ptable" style="margin-top:0">
                <tr style="background:rgba(176,110,243,.06)">
                  <td class="pk" style="color:var(--vocal)">🏆 Aggressive bM</td>
                  <td class="pv" style="color:#a78bfa">Trap · Urbano</td>
                  <td class="pp">Compresión fuerte y rápida. La voz queda <strong>aplastada, consistente y con carácter</strong>. Ideal para trap donde el vocal tiene que sonar denso sobre el 808. <strong>Punto de partida recomendado para tu canción en Sol mayor trap.</strong></td>
                </tr>
                <tr style="background:rgba(176,110,243,.06)">
                  <td class="pk" style="color:var(--vocal)">🏆 Punchy Vocals bM</td>
                  <td class="pv" style="color:#a78bfa">Trap · Reggaeton</td>
                  <td class="pp">Attack un poco más lento para dejar pasar el punch de los transientes. La voz tiene <strong>presencia y cuerpo</strong> sin sonar aplastada. Muy bueno si la voz tiene mucho movimiento dinámico.</td>
                </tr>
                <tr>
                  <td class="pk">✅ Control bM <span style="font-size:.65rem;color:var(--t4)">(default)</span></td>
                  <td class="pv">Universal</td>
                  <td class="pp">El preset más equilibrado. Buen punto de partida para cualquier género. No exagera nada — ajustás desde acá.</td>
                </tr>
                <tr>
                  <td class="pk">⚡ Biting bM</td>
                  <td class="pv">Trap agresivo · Drill</td>
                  <td class="pp">Compresión con carácter. Suma cierta <strong>mordida y agresividad</strong> al timbre. Funciona si el estilo del trap es oscuro y duro.</td>
                </tr>
                <tr>
                  <td class="pk">⚡ Total Control bM</td>
                  <td class="pv">Voz muy dinámica</td>
                  <td class="pp">Compresión máxima. Cuando la voz tiene diferencias de volumen muy grandes entre frases (cantante sin experiencia o toma descuidada), esto la nivela completamente.</td>
                </tr>
                <tr>
                  <td class="pk">↗️ Upfront</td>
                  <td class="pv">Pop · Balada</td>
                  <td class="pp">Diseñado para poner la voz <strong>al frente de la mezcla</strong>. Más indicado para pop donde la voz domina todo.</td>
                </tr>
                <tr>
                  <td class="pk" style="color:var(--t4)">De-essing bM</td>
                  <td class="pv" style="color:var(--t4)">Complemento</td>
                  <td class="pp" style="color:var(--t4)">Agrega un comportamiento de de-esser dentro de la compresión. <em>No lo uses si ya tenés un De-esser dedicado en el Slot 3.</em></td>
                </tr>
                <tr>
                  <td class="pk" style="color:var(--t4)">Pro Voice Over bM</td>
                  <td class="pv" style="color:var(--t4)">Locución</td>
                  <td class="pp" style="color:var(--t4)">Para voz hablada tipo podcast o narración. No está optimizado para música.</td>
                </tr>
                <tr>
                  <td class="pk" style="color:var(--t4)">Spoken Word Squeeze bM</td>
                  <td class="pv" style="color:var(--t4)">Locución</td>
                  <td class="pp" style="color:var(--t4)">Ídem anterior. Diseñado para voz hablada, no para canto.</td>
                </tr>
                <tr>
                  <td class="pk" style="color:var(--t4)">Something For Nothing Dax</td>
                  <td class="pv" style="color:var(--t4)">Experimental</td>
                  <td class="pp" style="color:var(--t4)">Preset de artista (Dax). Puede sonar muy bien o muy raro dependiendo de la voz — probálo como experimento.</td>
                </tr>
              </table>
              <div class="alert aok" style="margin-top:14px"><span class="ai">✅</span><p><strong>Para tu trap en Sol mayor:</strong> Empezá con <strong>Aggressive bM</strong> como base. Ajustá el Threshold hasta ver <strong>-6 a -8 dB de GR</strong> en los picos. Si la voz queda demasiado aplastada y pierde naturalidad, probá <strong>Punchy Vocals bM</strong>. El preset es solo el punto de partida — siempre ajustá Threshold y Ratio a mano después de cargarlo.</p></div>
            </div>
          </div>
        </div>
      </div>

      <div class="pcards g2" style="margin-top:18px">
        <!-- EQ POST -->
        <div class="pcard">
          <div class="pcard-hd"><div class="chtag chtag-v">Slot 5</div><div class="pcard-title">✨ EQ Post — Moldear el timbre final</div><div class="pcard-sub">Logic Channel EQ / Pro-Q 3 — ajuste de color y carácter</div></div>
          <div class="pcard-body">
            <div class="eq-ui"><canvas class="eq-canvas-el" id="eqVocalPost" width="700" height="150"></canvas><div class="eq-freqlabel"><span>20Hz</span><span>60</span><span>120</span><span>300</span><span>600</span><span>1k</span><span>3k</span><span>6k</span><span>12k</span><span>20kHz</span></div></div>
            <div class="alert ain" style="margin-bottom:12px;margin-top:0"><span class="ai">💡</span><p><strong>Presets de Logic:</strong> Los presets como <em>"Pop Vocal"</em>, <em>"Clear Vocals"</em> son buenos puntos de partida. <strong>Regla de oro:</strong> cargá el preset y luego <strong>reducí la ganancia de esas curvas a la mitad</strong> — suelen ser muy exagerados.</p></div>
            <table class="ptable">
              <tr><td class="pk">Presencia (+)</td><td class="pv" id="ep1-pres">+1 a +2 dB @ 3–5kHz</td><td class="pp">La zona de 3.000–5.000 Hz es donde la voz <strong>"corta" y se escucha sobre el beat</strong>. Un pequeño boost acá hace que la voz "aparezca" en la mezcla sin tener que subir el volumen general.</td></tr>
              <tr><td class="pk">Aire final</td><td class="pv">+1 dB @ 10–12kHz</td><td class="pp">Un pequeño empuje acá da esa sensación de <strong>apertura y liviandad</strong>.</td></tr>
              <tr><td class="pk">Cuerpo (si hace falta)</td><td class="pv">+1 dB @ 150–200 Hz</td><td class="pp">Si después del compresor la voz suena muy delgada, un pequeño boost acá la calienta.</td></tr>
            </table>
          </div>
        </div>
        <!-- SATURACION -->
        <div class="pcard">
          <div class="pcard-hd"><div class="chtag chtag-v">Slot 6</div><div class="pcard-title">🔥 Saturación — Calidez analógica</div><div class="pcard-sub">Slate Virtual Console / Softube Saturation Knob / cualquier saturador de cinta</div></div>
          <div class="pcard-body">
            <div class="plugin-ui"><div class="pui-bar"><span class="pui-brand">saturación / armónicos</span><span class="pui-name">Tape / Tube emulation</span></div><div class="pui-body"><canvas id="satCanvas" width="700" height="100" style="width:100%;height:100px;display:block"></canvas><div class="ff-knobs" id="satKnobs"></div></div></div>
            <table class="ptable">
              <tr><td class="pk">¿Qué hace?</td><td class="pv">Agrega armónicos</td><td class="pp">Las grabaciones digitales suenan "frías" porque son matemáticamente perfectas. La saturación agrega <strong>frecuencias extra llamadas "armónicos"</strong> que hacen que el sonido suene más rico y cálido.</td></tr>
              <tr><td class="pk">Drive (intensidad)</td><td class="pv">10–25%</td><td class="pp"><strong>Menos es más acá</strong>. 10–25% suena como "más rico sin saber por qué". 50%+ ya se empieza a notar claramente la distorsión.</td></tr>
              <tr><td class="pk">Tipo</td><td class="pv" id="sat-tipo">Tape</td><td class="pp"><strong>Tape (cinta)</strong> = suave, cálido. <strong>Tube (tubo/válvula)</strong> = más presencia y "mordida". Para voz suave/pop: Tape. Para trap/urbano: Tube.</td></tr>
              <tr><td class="pk">Mix (mezcla en paralelo)</td><td class="pv">20–40%</td><td class="pp">Mezclá solo el 20–40% de la señal saturada con la original. <strong>Siempre comparar A/B</strong> (encendido vs apagado) para verificar que mejoró.</td></tr>
            </table>

            <div class="div" style="margin:20px 0"></div>
            <div style="background:var(--bg3);border:1px solid var(--border2);border-radius:var(--r2);padding:18px 20px">
              <div style="font-size:.75rem;font-weight:800;color:var(--ff-gold);letter-spacing:.08em;text-transform:uppercase;margin-bottom:6px">✨ Saturación de Agudos (Exciter) — Con lo que ya tenés instalado</div>
              <div style="font-size:.75rem;color:var(--t3);margin-bottom:16px">La <strong style="color:var(--t2)">saturación de agudos</strong> o <em>exciter</em> es diferente a la saturación general: en vez de calentar toda la señal, solo agrega armónicos en las <strong style="color:var(--t2)">frecuencias altas (4 kHz–16 kHz)</strong>. El resultado es <em>aire, presencia y brillo</em> sin subir el volumen ni saturar los graves. Usalo <strong style="color:var(--t2)">después del EQ Post</strong>, muy sutil.</div>
              <table class="ptable" style="margin-top:0">
                <tr style="background:rgba(176,110,243,.06)">
                  <td class="pk" style="color:var(--vocal)">🏆 iZotope Neutron<br><span style="font-size:.65rem;color:var(--t3);font-weight:400">Exciter (módulo)</span></td>
                  <td class="pv" style="color:#a78bfa">Recomendado</td>
                  <td class="pp">Si tenés Neutron, tiene un módulo <strong>Exciter</strong> con bandas de frecuencia. Enfocá la banda de agudos (5–16 kHz) y elegí modo <strong>Tape o Retro</strong>. Subí Amount a 15–25%. Es quirúrgico y muy controlable — el mejor de los que tenés para esto.</td>
                </tr>
                <tr style="background:rgba(176,110,243,.06)">
                  <td class="pk" style="color:var(--vocal)">🏆 iZotope Ozone<br><span style="font-size:.65rem;color:var(--t3);font-weight:400">Exciter (módulo)</span></td>
                  <td class="pv" style="color:#a78bfa">Recomendado</td>
                  <td class="pp">Si tenés Ozone (cualquier versión), su módulo <strong>Exciter</strong> es idéntico al de Neutron. Aplicalo como plugin individual en el canal de la voz. Modo <strong>Warm</strong> para pop/salsa, modo <strong>Retro</strong> para trap.</td>
                </tr>
                <tr>
                  <td class="pk">🍎 Logic — Exciter<br><span style="font-size:.65rem;color:var(--t3);font-weight:400">Dynamics → Exciter</span></td>
                  <td class="pv">Nativo · Gratis</td>
                  <td class="pp">Lo encontrás en <strong>Dynamics → Exciter</strong> en Logic. Controlá la <strong>Frequency</strong> (a cuántos Hz empieza el efecto — ponelo en 4.000 Hz para agudos) y el <strong>Amount</strong> (10–20% para sutil). Muy efectivo y ya lo tenés.</td>
                </tr>
                <tr>
                  <td class="pk">🍎 Logic — Amp Designer<br><span style="font-size:.65rem;color:var(--t3);font-weight:400">Amps and Pedals</span></td>
                  <td class="pv">Nativo · Gratis</td>
                  <td class="pp">Elige un preset tipo <strong>"Small Tweed"</strong> o <strong>"Vintage British"</strong>. Bajá el Gain al mínimo (1–2) y el Input a -12 dB. El efecto es muy sutil: agrega calidez de tubo sin que suene como guitarra. Ideal para trap.</td>
                </tr>
                <tr>
                  <td class="pk">🍎 Logic — Pedalboard<br><span style="font-size:.65rem;color:var(--t3);font-weight:400">Amps and Pedals</span></td>
                  <td class="pv">Nativo · Creativo</td>
                  <td class="pp">Agregá un pedal <strong>Overdrive</strong> con Drive en 5–10% y Tone en el lado brillante. Mezclá en paralelo (bajá el wet al 15–20%). Más colorido que el Amp Designer — probálo en trap para efectos creativos.</td>
                </tr>
                <tr>
                  <td class="pk">FabFilter Saturn 2<br><span style="font-size:.65rem;color:var(--t3);font-weight:400">Si lo tenés en tu bundle</span></td>
                  <td class="pv">Multiband</td>
                  <td class="pp">Si tenés el bundle completo de FabFilter, Saturn 2 te permite saturar <strong>solo la banda de agudos</strong> con un crossover. Elegí el modo <strong>Tape</strong> y activá solo la banda alta (>4 kHz). Es el más profesional para esto, pero no es necesario si tenés iZotope.</td>
                </tr>
              </table>
              <div class="alert aok" style="margin-top:14px"><span class="ai">✅</span><p><strong>Receta rápida para tu trap en Sol mayor:</strong> Abrí <strong>iZotope Neutron o Ozone → módulo Exciter</strong>. Seleccioná la banda más alta (desde 5 kHz). Elegí modo <strong>Retro</strong>. Amount: <strong>20–30%</strong>. Hacé A/B — si la voz "brilla" un poco más sin sonar áspera, está perfecto. Si no tenés iZotope, usá el <strong>Exciter nativo de Logic</strong> con Frequency en 4.000 Hz y Amount en 15%.</p></div>
            </div>
          </div>
        </div>
      </div>

      <div class="pcards g2" style="margin-top:18px">
        <!-- REVERB -->
        <div class="pcard">
          <div class="pcard-hd"><div class="chtag chtag-v">Canal Auxiliar (Send)</div><div class="pcard-title">🌊 Reverb — El espacio de la voz</div><div class="pcard-sub">Valhalla VintageVerb / Valhalla Room / Pro-R — siempre en un canal AUXILIAR separado</div></div>
          <div class="pcard-body">
            <div class="plugin-ui" style="background:#320a0a;border:1px solid #4a1515"><div class="pui-bar" style="background:linear-gradient(180deg,#420f0f,#320a0a);border-bottom:1px solid #4a1515"><span class="pui-brand" style="color:#fbbf24;font-size:12px">ValhallaVintageVerb</span><span class="pui-name">Auxiliar 1</span></div><div class="pui-body"><canvas id="reverbCanvas" width="700" height="140" style="width:100%;height:140px;display:block"></canvas></div></div>
            <table class="ptable">
              <tr><td class="pk">¿Por qué auxiliar?</td><td class="pv">Mejor control</td><td class="pp">Si ponés el Reverb directamente en la voz (insert), no podés controlar cuánto reverb va sin afectar la señal seca. En un canal auxiliar, <strong>mandás una copia de la voz al reverb y mezclás cuánto querés con el fader</strong>.</td></tr>
              <tr><td class="pk">Tipo de reverb</td><td class="pv" id="rv-tipo">Room o Hall</td><td class="pp"><strong>Room</strong> = imita un cuarto pequeño. Trap, reggaeton, urbano. <strong>Hall</strong> = imita una sala grande. Pop, baladas, salsa. <strong>Plate</strong> = reverb de placa metálica, muy musical para salsa y pop clásico.</td></tr>
              <tr><td class="pk">Pre-delay</td><td class="pv" id="rv-predelay">20–30 ms</td><td class="pp">El tiempo que espera antes de que el reverb empiece. <strong>Sin pre-delay, el reverb "arranca" exactamente cuando cantás</strong> y enturbia la inteligibilidad.</td></tr>
              <tr><td class="pk">Decay (RT60)</td><td class="pv" id="rv-decay">1.2–2.2 s</td><td class="pp">Cuánto tiempo tarda el reverb en desaparecer. <strong>1.2 s = reverb corto</strong> (trap, reggaeton). 2.2 s = reverb largo y envolvente (pop, balada).</td></tr>
              <tr><td class="pk">High Damping</td><td class="pv">60–70%</td><td class="pp">Corta los agudos del reverb para que suene más natural. Sin esto, el reverb suena metálico y artificial.</td></tr>
            </table>
            <div class="alert ain" style="margin-top:14px"><span class="ai">🎛️</span><p><strong>Plugins recomendados de Reverb:</strong><br>
            🥇 <strong>Valhalla VintageVerb</strong> — el estándar de la industria. Modos Vintage/Modern, ideal para trap y urbano.<br>
            🥇 <strong>Valhalla Room</strong> — reverb de cuarto limpio y musical, perfecto para pop y reggaeton.<br>
            🥈 <strong>FabFilter Pro-R 2</strong> — total control sobre el espectro del reverb con EQ integrado. Muy versátil.<br>
            🥈 <strong>Waves Abbey Road Plates</strong> — emulación de las placas metálicas originales de Abbey Road. Ideal para salsa y pop clásico.<br>
            🥉 <strong>Lexicon PCM Native</strong> — el sonido de reverb más clásico del estudio. Muy musical.<br>
            🆓 <strong>OrilRiver</strong> (gratis) — reverb de buena calidad para empezar sin costo.<br>
            🍎 <strong>ChromaVerb</strong> (Logic nativo) — excelente reverb incluido en Logic. Modo "Room" para trap, "Hall" para pop.</p></div>
          </div>
        </div>
        <!-- DELAY -->
        <div class="pcard">
          <div class="pcard-hd"><div class="chtag chtag-v">Canal Auxiliar (Send)</div><div class="pcard-title">⏱️ Delay — El eco rítmico</div><div class="pcard-sub">Siempre sincronizado al BPM del beat para sonar musical</div></div>
          <div class="pcard-body">
            <table class="ptable">
              <tr><td class="pk">BPM sync</td><td class="pv">1/8 o 1/4 nota</td><td class="pp">El eco debe repetirse en tiempo con el beat. <strong>1/4 nota</strong> = un eco por cada tiempo del beat, más espaciado. <strong>1/8 nota</strong> = un eco por cada medio tiempo, más rápido y sutil.</td></tr>
              <tr><td class="pk">Feedback</td><td class="pv" id="dly-fb">20–35%</td><td class="pp">Cuántas veces se repite el eco. 20–35% = 2 o 3 ecos que van bajando de volumen.</td></tr>
              <tr><td class="pk">Damping (filtro del eco)</td><td class="pv">Alto</td><td class="pp">Cada repetición del eco debe sonar <strong>más oscura</strong> que la anterior — igual que un eco real en una sala.</td></tr>
              <tr><td class="pk">Mix en el auxiliar</td><td class="pv">-18 a -25 dB</td><td class="pp">Muy sutil — el delay debe <strong>sentirse como "amplitud" de la voz</strong>, no escucharse como eco separado.</td></tr>
              <tr><td class="pk">Stereo Spread</td><td class="pv">L/R o Haas</td><td class="pp">Muchos delays permiten separar los ecos Left y Right. El <strong>efecto Haas</strong> (un canal delayed 10–30 ms respecto al otro) agranda la imagen estéreo de la voz sin sonar como eco real.</td></tr>
            </table>
            <div class="alert ain" style="margin-top:14px"><span class="ai">🎛️</span><p><strong>Plugins recomendados de Delay:</strong><br>
            🥇 <strong>Soundtoys EchoBoy</strong> — el delay más versátil del mercado. Tape, analog, digital, ping-pong y más. Esencial para urbano.<br>
            🥇 <strong>Valhalla Delay</strong> — delay moderno con modos especiales (Ghost, Pitch, etc.). Muy creativo para efectos vocales.<br>
            🥈 <strong>FabFilter Timeless 3</strong> — delay con modulación avanzada y filtros integrados. Control total.<br>
            🥈 <strong>Waves H-Delay</strong> — delay clásico tipo hardware, ideal para el delay en 1/8 sincronizado al beat.<br>
            🥉 <strong>Soundtoys PanMan</strong> — ideal para efectos de delay rítmico en el estéreo, muy usado en trap.<br>
            🍎 <strong>Stereo Delay</strong> (Logic nativo) — el delay incluido en Logic. Funciona perfecto para empezar. Activá BPM Sync.<br>
            🍎 <strong>Tape Delay</strong> (Logic nativo) — emulación de delay tipo cinta, más cálido y musical que el digital puro.</p></div>
          </div>
        </div>
      </div>
    </div>

    <!-- ═══ BEAT ═══ -->
    <div class="tab-panel" id="panel-beat">
      <div class="panel-hero">
        <h1>🎵 Canal Beat</h1>
        <p>Beat descargado de internet — cómo prepararlo, ecualizarlo y hacerle espacio para que la voz respire.</p>
      </div>
      <div class="alert ain" style="margin-bottom:28px"><span class="ai">💡</span><p><strong>¿Qué plugins usar?</strong><br>
<strong>EQ del Beat:</strong> <em>FabFilter Pro-Q 3</em> (recomendado) · <em>Channel EQ</em> de Logic · <em>Waves SSL E-Channel</em>.<br>
<strong>Compresor (si aplica):</strong> <em>FabFilter Pro-C 2</em> (modo Bus o Clean) · <em>Waves SSL G-Bus Compressor</em> · <em>Compressor</em> de Logic (Vintage VCA).<br>
<strong>Stereo Imager:</strong> <em>FabFilter Pro-Q 3</em> en modo Mid/Side · <em>Waves S1 Stereo Imager</em> · <em>iZotope Imager</em>.<br>
<strong>Detección de BPM:</strong> <em>BPM Counter</em> de Logic (nativo, gratis) · <em>Mixed In Key</em>.<br>
<strong>Detección de Key:</strong> <em>Auto-Key</em> de Antares · <em>Tunebat.com</em> (online, gratis).</p></div>

      <!-- DETECCIÓN RÁPIDA — NUEVA TARJETA -->
      <div class="detect-card">
        <h3>⚡ Detección Rápida — BPM y Tonalidad del Beat</h3>
        <div class="detect-grid">
          <div class="detect-item">
            <h4>🎯 Detectar el BPM</h4>
            <p>En <strong>Logic Pro</strong>, el plugin nativo <strong>BPM Counter</strong> (encontralo en la categoría <em>Metering</em>) te muestra el tempo exacto del beat en tiempo real. Insertálo en el canal del beat y dale play — te muestra los BPM al instante. También podés usar la función <em>"Analizar tempo del audio"</em> desde el menú Edit cuando seleccionás el clip. Conocer el BPM exacto es esencial para sincronizar el Delay al tempo.</p>
          </div>
          <div class="detect-item">
            <h4>🎵 Detectar la Tonalidad (Key)</h4>
            <p>Dos opciones profesionales: <strong>① Web <a href="https://tunebat.com" target="_blank">Tunebat.com</a></strong> — subís el beat o buscás el nombre y te dice la Key y el BPM automáticamente. Gratis y muy preciso. <strong>② Plugin <em>Auto-Key de Antares</em></strong> — insertálo en el canal del beat y al reproducirlo detecta la escala y la envía automáticamente al canal del Auto-Tune. Funciona en tiempo real sin tener que buscar manualmente. La Key detectada debe coincidir exactamente con lo que configurás en Autotune y Melodyne.</p>
          </div>
        </div>
      </div>

      <div class="beat-prep">
        <h3>⚠️ Antes de importar el beat al DAW — pasos obligatorios</h3>
        <div class="bsteps">
          <div class="bstep"><strong>Chequeá si ya viene masterizado.</strong> Abrí el archivo de audio en cualquier editor. Si la onda de sonido se ve como un <strong>"ladrillo"</strong> (sólido, sin variaciones de altura), el beat ya fue masterizado por el productor. En ese caso, saltás el compresor del canal beat.</div>
          <div class="bstep"><strong>Revisá el nivel de pico.</strong> Al importar el beat, el <strong>nivel de pico</strong> debe estar entre -6 dBFS y -12 dBFS. Si está casi en 0 dBFS o clippeando, agregá un plugin de "Utility/Gain" al principio del canal y bajá la ganancia.</div>
          <div class="bstep"><strong>Usá el mejor formato disponible.</strong> Si el beat existe en WAV o FLAC, siempre preferilo sobre MP3. Si solo tenés MP3, asegurate que sea 320 kbps.</div>
          <div class="bstep"><strong>Bajá el volumen del beat primero.</strong> Empezá con el fader del beat en -6 dB o -8 dB debajo de 0. Luego subís la voz hasta encontrar el balance correcto.</div>
        </div>
      </div>

      <div class="pcards g2">
        <div class="pcard">
          <div class="pcard-hd"><div class="chtag chtag-b">🎵 Canal Beat — Slot 1</div><div class="pcard-title">🎚️ EQ Beat — Crear espacio para la voz</div><div class="pcard-sub">El ajuste más importante del beat cuando mezclás con voz</div></div>
          <div class="pcard-body">
            <div class="eq-ui"><canvas class="eq-canvas-el" id="eqBeat" width="700" height="150"></canvas><div class="eq-freqlabel"><span>20Hz</span><span>60</span><span>120</span><span>300</span><span>600</span><span>1k</span><span>3k</span><span>6k</span><span>12k</span><span>20kHz</span></div></div>
            <table class="ptable">
              <tr><td class="pk">Low Cut del beat</td><td class="pv">30–40 Hz</td><td class="pp">Los beats de YouTube a veces tienen sub-frecuencias muy bajas (debajo de 40 Hz) que no aportan nada pero ocupan espacio. Cortá sin miedo.</td></tr>
              <tr><td class="pk">Dip (hueco) para la voz</td><td class="pv" id="eb-dip">-3 a -4 dB @ 2–4kHz</td><td class="pp"><strong>Este es el ajuste más importante.</strong> La zona de 2.000–4.000 Hz es donde la voz tiene más presencia. Bajando el beat -3 dB en esa zona, creás un "hueco" donde tu voz puede existir sin pelear.</td></tr>
              <tr><td class="pk">Q del dip</td><td class="pv">0.8 – 1.2</td><td class="pp">El "ancho" del hueco. Q bajo (0.8) = hueco ancho. Q alto (2–3) = hueco más estrecho y quirúrgico.</td></tr>
              <tr><td class="pk">Sub bass y kick</td><td class="pv">NO TOCAR</td><td class="pp">El sub bass (40–100 Hz) y el kick son el núcleo del beat. Cualquier corte agresivo en esa zona destruye el groove.</td></tr>
            </table>
          </div>
        </div>
        <div class="pcard">
          <div class="pcard-hd"><div class="chtag chtag-b">🎵 Canal Beat — Slot 2</div><div class="pcard-title">🗜️ Compresor del Beat — Solo si no está masterizado</div><div class="pcard-sub">FabFilter Pro-C 2 — compresión muy suave o no usarla</div></div>
          <div class="pcard-body">
            <div class="plugin-ui"><div class="pui-bar"><span class="pui-brand">fabfilter pro·c²</span><span class="pui-name">Beat Bus — Glue suave</span></div><div class="pui-body" style="padding:10px 14px"><div class="comp-display"><canvas class="comp-canvas-el" id="compBeat" width="700" height="120"></canvas></div><div class="ff-knobs" id="compBeatKnobs"></div></div></div>
            <table class="ptable">
              <tr><td class="pk">Ratio</td><td class="pv">2:1</td><td class="pp">Muy suave. El beat ya viene con su propia dinámica procesada. <strong>2:1 apenas toca la señal</strong> — solo unifica un poco los picos más altos.</td></tr>
              <tr><td class="pk">Attack</td><td class="pv">30–50 ms</td><td class="pp"><strong>Lento.</strong> Necesitás que el punch del kick y el snare pasen sin que el compresor los toque.</td></tr>
              <tr><td class="pk">GR máximo</td><td class="pv">-2 a -3 dB</td><td class="pp"><strong>El GR debe moverse suavemente, no clavarse en un valor alto todo el tiempo.</strong></td></tr>
            </table>
            <div class="alert aer"><span class="ai">🚫</span><p><strong>Si el beat ya viene masterizado (onda tipo ladrillo): no agregues compresor.</strong> Comprimir sobre un audio ya comprimido destruye la dinámica restante.</p></div>
          </div>
        </div>
      </div>
    </div>

    <!-- ═══ MASTER ═══ -->
    <div class="tab-panel" id="panel-master">
      <div class="panel-hero">
        <h1>🎚️ Canal Master</h1>
        <p>La mezcla final (Stereo Out) — EQ Master, Glue Compressor, Stereo Imager y Limiter. El orden importa.</p>
      </div>
      <div class="alert ain" style="margin-bottom:28px"><span class="ai">💡</span><p><strong>¿Qué plugins usar?</strong><br>
<strong>1. EQ Master:</strong> <em>Channel EQ</em> (Logic) o <em>FabFilter Pro-Q 3</em>.<br>
<strong>2. Glue Compressor:</strong> <em>Compressor</em> (Logic, modelo "Vintage VCA") o <em>FabFilter Pro-C 2</em> (Style: <strong>"Bus"</strong>).<br>
<strong>3. Stereo Imager (Graves a Mono):</strong> <em>FabFilter Pro-Q 3</em> con el truco "Mid/Side".<br>
<strong>4. Limiter:</strong> <em>Adaptive Limiter</em> (Logic, carpeta 'Dynamics') o <em>FabFilter Pro-L 2</em>.</p></div>

      <div class="pcards g2">
        <div class="pcard">
          <div class="pcard-hd"><div class="chtag chtag-m">Master — Slot 1</div><div class="pcard-title">🎚️ EQ Master — Balance final</div><div class="pcard-sub">Movimientos pequeños — máximo ±3 dB en cualquier banda</div></div>
          <div class="pcard-body">
            <div class="eq-ui"><canvas class="eq-canvas-el" id="eqMaster" width="700" height="150"></canvas><div class="eq-freqlabel"><span>20Hz</span><span>60</span><span>120</span><span>300</span><span>600</span><span>1k</span><span>3k</span><span>6k</span><span>12k</span><span>20kHz</span></div></div>
            <table class="ptable">
              <tr><td class="pk">Low Cut master</td><td class="pv">20–30 Hz</td><td class="pp">Solo elimina sub-frecuencias inaudibles que consumen headroom. No afecta nada que el oído pueda escuchar.</td></tr>
              <tr><td class="pk">Sub bass</td><td class="pv" id="em-sub">±0 a -2 dB @ 60Hz</td><td class="pp">Si la mezcla suena excesivamente grave o pastosa, un leve corte acá lo aliviana. <strong>Máximo -2 dB</strong>.</td></tr>
              <tr><td class="pk">High Shelf master</td><td class="pv" id="em-hs">+1 dB @ 12kHz</td><td class="pp">Un pequeño lift en los agudos del master abre la mezcla y le da <strong>sensación de profundidad y espacio</strong>.</td></tr>
            </table>
            <div class="alert aer"><span class="ai">🚫</span><p><strong>Regla de oro del Master EQ:</strong> Si una banda necesita más de ±3 dB para sonar bien, el problema está en los canales individuales, no en el master.</p></div>
          </div>
        </div>
        <div class="pcard">
          <div class="pcard-hd"><div class="chtag chtag-m">Master — Slot 2</div><div class="pcard-title">🔗 Glue Compressor — Une vocal y beat</div><div class="pcard-sub">Pro-C 2 (Style: Bus) — hace que todo suene como "una sola canción"</div></div>
          <div class="pcard-body">
            <div class="plugin-ui"><div class="pui-bar"><span class="pui-brand">fabfilter pro·c²</span><span class="pui-name">Style: Bus (Master Glue)</span></div><div class="pui-body" style="padding:10px 14px"><div class="comp-display"><canvas class="comp-canvas-el" id="compGlue" width="700" height="120"></canvas></div><div class="ff-knobs" id="compGlueKnobs"></div></div></div>
            <table class="ptable">
              <tr><td class="pk">Configurar Pro-C 2</td><td class="pv">Style: Bus</td><td class="pp">Hacé clic en donde dice <strong>"Clean"</strong> y cambialo a <strong>"Bus"</strong>. Ese algoritmo es el equivalente exacto diseñado por FabFilter para hacer el efecto "Glue" en el Master.</td></tr>
              <tr><td class="pk">Ratio</td><td class="pv" id="gc-ratio">2:1 – 4:1</td><td class="pp">Suave. El objetivo no es comprimir agresivamente sino que la voz y el beat "respiren juntos".</td></tr>
              <tr><td class="pk">GR objetivo</td><td class="pv">-2 a -3 dB</td><td class="pp">En el Master, el medidor de GR debe moverse solo <strong>-2 a -3 dB en los momentos más fuertes</strong>.</td></tr>
              <tr><td class="pk">Attack</td><td class="pv" id="gc-att">30–50 ms</td><td class="pp">Lento. Dejá que el kick y los transientes del beat pasen sin ser comprimidos.</td></tr>
            </table>
          </div>
        </div>
      </div>

      <div class="pcards g2" style="margin-top:18px">
        <div class="pcard">
          <div class="pcard-hd"><div class="chtag chtag-m">Master — Slot 3</div><div class="pcard-title">↔️ Stereo Imager (Graves a Mono)</div><div class="pcard-sub">Usando FabFilter Pro-Q 3 como solucionador estéreo mid/side</div></div>
          <div class="pcard-body">
            <table class="ptable">
              <tr><td class="pk">¿Cómo hacerlo con Pro-Q 3?</td><td class="pv">Truco "Side"</td><td class="pp">Usá tu <strong>FabFilter Pro-Q 3</strong>: Creá un corte de graves (Low Cut/High Pass) en <strong>120 Hz</strong>. Abajo, donde dice "Stereo Placement", cambialo de "Stereo" a <strong>"Side"</strong>. ¡Listo! Cortaste todos los graves de los costados. <strong>Tus graves ahora son 100% Mono.</strong></td></tr>
              <tr><td class="pk">Sub bass (20–120 Hz)</td><td class="pv">MONO</td><td class="pp"><strong>Los graves SIEMPRE en mono.</strong> Si los graves son estéreo, cuando la canción suena en un parlante mono los graves se cancelan y desaparecen.</td></tr>
              <tr><td class="pk">High (5 kHz+)</td><td class="pv" id="si-high">Amplio</td><td class="pp">Los agudos pueden ser más anchos sin problemas — ahí viven los hi-hats, el reverb, el aire.</td></tr>
            </table>
            <div class="alert aw"><span class="ai">⚠️</span><p><strong>Siempre chequeá en mono antes de finalizar:</strong> Activá "mono" en tu DAW. Si la voz pierde volumen o el bajo desaparece, tenés un problema de cancelación de fase.</p></div>
          </div>
        </div>
        <div class="pcard">
          <div class="pcard-hd"><div class="chtag chtag-m">Master — Slot 4 — SIEMPRE EL ÚLTIMO</div><div class="pcard-title">🛡️ Limiter — Pro-L 2 — El techo de volumen</div><div class="pcard-sub">FabFilter Pro-L 2 — el último plugin de la cadena, siempre</div></div>
          <div class="pcard-body">
            <div class="plugin-ui"><div class="pui-bar"><span class="pui-brand">fabfilter pro·l²</span><span class="pui-name">True Peak Limiter — Master Output</span></div><div class="pui-body"><canvas id="limiterCanvas" width="700" height="110" style="width:100%;height:110px;display:block"></canvas><div class="ff-knobs" id="limiterKnobs"></div></div></div>
            <table class="ptable">
              <tr><td class="pk">Output Level (Techo)</td><td class="pv">-1.00 dB</td><td class="pp">Ponelo siempre en <strong>-1.00 dB</strong>. Además, activá el botón <strong>'ISP' o 'True Peak'</strong> para proteger contra distorsiones invisibles.</td></tr>
              <tr><td class="pk">Style</td><td class="pv">Modern / Pop</td><td class="pp">Dejalo en <strong>Modern</strong> o <strong>Pop</strong> y el plugin ajusta los ms de Attack, Release y Lookahead de forma inteligente.</td></tr>
              <tr><td class="pk">Gain (Para subir LUFS)</td><td class="pv" id="lim-lufs">+X dB hasta el target</td><td class="pp">Subís la perilla <strong>Gain</strong> para "empujar" el volumen de la mezcla contra el techo. Tenés que subirla mientras mirás el medidor hasta alcanzar tu volumen objetivo (ej: <strong>-14 LUFS para Spotify</strong>).</td></tr>
              <tr><td class="pk">GR del Limiter</td><td class="pv">-2 a -4 dB máx</td><td class="pp">Si el limiter está reduciendo más de -4 dB seguido, <strong>la mezcla está muy alta antes del limiter</strong>. Bajá el volumen de los canales.</td></tr>
            </table>
            <div class="notebox" style="margin-top:14px">
              <strong>Targets por plataforma de streaming:</strong><br>
              • Spotify: <strong>-14 LUFS</strong><br>• Apple Music: <strong>-16 LUFS</strong><br>• YouTube: <strong>-13 LUFS</strong><br>• Instagram / TikTok: <strong>-9 a -12 LUFS</strong><br>• Descarga / CD: <strong>-9 LUFS</strong>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ═══ POR GÉNERO ═══ -->
    <div class="tab-panel" id="panel-generos">
      <div class="panel-hero">
        <h1>🎸 Configuración por Género</h1>
        <p>Valores específicos para cada estilo. Seleccioná el género en la barra superior para actualizar todos los valores del manual.</p>
      </div>
      <div class="gdata vis" data-gs="general">
        <div class="alert ain" style="margin-bottom:18px"><span class="ai">🎸</span><p><strong>General — Punto de partida universal.</strong> Estos valores funcionan para cualquier género como punto de partida. Ajustá según tu oído a partir de acá.</p></div>
        <div class="gtable-wrap"><table class="gtable"><thead><tr><th>Plugin</th><th>Canal</th><th>Parámetro</th><th class="gg">Valor General</th><th>Explicación simple</th></tr></thead><tbody>
          <tr><td>Melodyne</td><td>Vocal</td><td>Retune Speed</td><td class="mono gg">60%</td><td style="font-size:.73rem;color:var(--t3)">Corrección natural, imperceptible</td></tr>
          <tr><td>Autotune</td><td>Vocal</td><td>Retune Speed</td><td class="mono gg">30–40</td><td style="font-size:.73rem;color:var(--t3)">Natural, se siente pero no se nota</td></tr>
          <tr><td>EQ Pre</td><td>Vocal</td><td>Low Cut</td><td class="mono gg">110 Hz</td><td style="font-size:.73rem;color:var(--t3)">Corta ruido sin tocar la voz</td></tr>
          <tr><td>EQ Pre</td><td>Vocal</td><td>High Shelf</td><td class="mono gg">+2 dB @ 7kHz</td><td style="font-size:.73rem;color:var(--t3)">Brillo y aire moderado</td></tr>
          <tr><td>Compresor</td><td>Vocal</td><td>Ratio / Attack / Release</td><td class="mono gg">3:1 / 25ms / 90ms</td><td style="font-size:.73rem;color:var(--t3)">Empareja sin aplastar</td></tr>
          <tr><td>Reverb</td><td>Vocal</td><td>Tipo / Decay</td><td class="mono gg">Room / 1.5s</td><td style="font-size:.73rem;color:var(--t3)">Espacio íntimo y versátil</td></tr>
          <tr><td>EQ Beat</td><td>Beat</td><td>Dip para voz</td><td class="mono gg">-3 dB @ 3kHz</td><td style="font-size:.73rem;color:var(--t3)">Espacio donde vive la voz</td></tr>
          <tr><td>Glue Comp</td><td>Master</td><td>Ratio / GR</td><td class="mono gg">2:1 / -2 dB</td><td style="font-size:.73rem;color:var(--t3)">Une vocal y beat</td></tr>
          <tr><td>Limiter</td><td>Master</td><td>LUFS target</td><td class="mono gg">-14 LUFS</td><td style="font-size:.73rem;color:var(--t3)">Listo para Spotify</td></tr>
        </tbody></table></div>
      </div>
      <div class="gdata" data-gs="pop">
        <div class="alert" style="background:rgba(236,72,153,.08);border-color:rgba(236,72,153,.25);color:#f9a8d4;margin-bottom:18px"><span class="ai">🎵</span><p><strong>Pop — Voz brillante al frente, reverb amplio, mezcla limpia y perfecta.</strong> La voz debe dominar absolutamente. Mucho aire y presencia.</p></div>
        <div class="gtable-wrap"><table class="gtable"><thead><tr><th>Plugin</th><th>Canal</th><th>Parámetro</th><th class="gp">Valor Pop</th><th>¿Por qué este valor?</th></tr></thead><tbody>
          <tr><td>Melodyne</td><td>Vocal</td><td>Retune Speed</td><td class="mono gp">80–90%</td><td style="font-size:.73rem;color:var(--t3)">Pop exige afinación casi perfecta — más corrección</td></tr>
          <tr><td>Autotune</td><td>Vocal</td><td>Retune Speed</td><td class="mono gp">20–30</td><td style="font-size:.73rem;color:var(--t3)">Natural, imperceptible — no el efecto robótico</td></tr>
          <tr><td>EQ Pre</td><td>Vocal</td><td>Low Cut</td><td class="mono gp">110 Hz, 18dB/oct</td><td style="font-size:.73rem;color:var(--t3)">Limpieza estándar</td></tr>
          <tr><td>EQ Pre</td><td>Vocal</td><td>High Shelf</td><td class="mono gp">+3 dB @ 8kHz</td><td style="font-size:.73rem;color:var(--t3)">Pop necesita mucho brillo y presencia aérea</td></tr>
          <tr><td>Compresor</td><td>Vocal</td><td>Ratio / Attack</td><td class="mono gp">3:1 / 25ms</td><td style="font-size:.73rem;color:var(--t3)">Consistente pero que todavía suene dinámico</td></tr>
          <tr><td>EQ Post</td><td>Vocal</td><td>Presencia</td><td class="mono gp">+2 a +3 dB @ 4kHz</td><td style="font-size:.73rem;color:var(--t3)">La voz pop necesita "cortar" sobre todo</td></tr>
          <tr><td>Reverb</td><td>Vocal</td><td>Tipo / Decay / Pre-delay</td><td class="mono gp">Hall / 2.2s / 25ms</td><td style="font-size:.73rem;color:var(--t3)">Amplio y envolvente, característico del pop</td></tr>
          <tr><td>EQ Beat</td><td>Beat</td><td>Dip para voz</td><td class="mono gp">-4 dB @ 3kHz</td><td style="font-size:.73rem;color:var(--t3)">Hueco más pronunciado — la voz es lo principal</td></tr>
          <tr><td>Limiter</td><td>Master</td><td>LUFS target</td><td class="mono gp">-14 LUFS</td><td style="font-size:.73rem;color:var(--t3)">Estándar Spotify, limpio y profesional</td></tr>
        </tbody></table></div>
      </div>
      <div class="gdata" data-gs="trap">
        <div class="alert" style="background:rgba(139,92,246,.08);border-color:rgba(139,92,246,.25);color:#c4b5fd;margin-bottom:18px"><span class="ai">🔊</span><p><strong>Trap — 808 intocable, voz oscura, compresión agresiva, efecto Autotune audible.</strong> El sub bass del 808 es el corazón del trap — nunca lo tocás.</p></div>
        <div class="gtable-wrap"><table class="gtable"><thead><tr><th>Plugin</th><th>Canal</th><th>Parámetro</th><th class="gt">Valor Trap</th><th>¿Por qué este valor?</th></tr></thead><tbody>
          <tr><td>Autotune</td><td>Vocal</td><td>Retune Speed</td><td class="mono gt">0–10 (efecto)</td><td style="font-size:.73rem;color:var(--t3)">0 = efecto robótico total, el sonido del trap moderno</td></tr>
          <tr><td>EQ Pre</td><td>Vocal</td><td>Low Cut</td><td class="mono gt">120 Hz, 24dB/oct</td><td style="font-size:.73rem;color:var(--t3)">Corte más agresivo — voz oscura y compacta</td></tr>
          <tr><td>Compresor</td><td>Vocal</td><td>Ratio / Attack</td><td class="mono gt">4:1 – 6:1 / 15ms</td><td style="font-size:.73rem;color:var(--t3)">Compresión agresiva, voz más "aplastada" y consistente</td></tr>
          <tr><td>Reverb</td><td>Vocal</td><td>Tipo / Decay</td><td class="mono gt">Room / 0.7–1.0s</td><td style="font-size:.73rem;color:var(--t3)">Reverb muy corto — voz seca y cercana</td></tr>
          <tr><td>EQ Beat</td><td>Beat</td><td>Sub 808 (40–100Hz)</td><td class="mono gt">NO TOCAR</td><td style="font-size:.73rem;color:var(--t3)">El 808 es el alma del trap — tocarlo lo destruye</td></tr>
          <tr><td>EQ Beat</td><td>Beat</td><td>Dip para voz</td><td class="mono gt">-3 dB @ 2.5kHz</td><td style="font-size:.73rem;color:var(--t3)">Espacio en zona de presencia</td></tr>
          <tr><td>Stereo Imager</td><td>Master</td><td>Sub band</td><td class="mono gt">Mono absoluto</td><td style="font-size:.73rem;color:var(--t3)">El 808 en mono para máxima potencia en cualquier sistema</td></tr>
          <tr><td>Limiter</td><td>Master</td><td>LUFS target</td><td class="mono gt">-9 a -11 LUFS</td><td style="font-size:.73rem;color:var(--t3)">Trap va más fuerte — más impacto</td></tr>
        </tbody></table></div>
      </div>
      <div class="gdata" data-gs="reggaeton">
        <div class="alert" style="background:rgba(16,185,129,.08);border-color:rgba(16,185,129,.25);color:#6ee7b7;margin-bottom:18px"><span class="ai">🎶</span><p><strong>Reggaeton — El dembow es sagrado, graves calientes, voz con presencia y punch.</strong> El patrón dembow debe escucharse siempre claramente.</p></div>
        <div class="gtable-wrap"><table class="gtable"><thead><tr><th>Plugin</th><th>Canal</th><th>Parámetro</th><th class="gr">Valor Reggaeton</th><th>¿Por qué este valor?</th></tr></thead><tbody>
          <tr><td>Autotune</td><td>Vocal</td><td>Retune Speed</td><td class="mono gr">10–20</td><td style="font-size:.73rem;color:var(--t3)">Puede ser sutil o más notorio según el estilo</td></tr>
          <tr><td>EQ Pre</td><td>Vocal</td><td>Low Cut</td><td class="mono gr">100 Hz, 18dB/oct</td><td style="font-size:.73rem;color:var(--t3)">Standard — equilibrio entre limpieza y cuerpo</td></tr>
          <tr><td>EQ Post</td><td>Vocal</td><td>Presencia</td><td class="mono gr">+2 dB @ 3kHz</td><td style="font-size:.73rem;color:var(--t3)">La voz necesita "cortar" sobre el perreo</td></tr>
          <tr><td>Compresor</td><td>Vocal</td><td>Ratio / Attack</td><td class="mono gr">4:1 / 20ms</td><td style="font-size:.73rem;color:var(--t3)">Más agresivo que pop para que tenga punch</td></tr>
          <tr><td>Reverb</td><td>Vocal</td><td>Tipo / Decay</td><td class="mono gr">Room / 1.2s</td><td style="font-size:.73rem;color:var(--t3)">Corto pero presente, íntimo</td></tr>
          <tr><td>EQ Beat</td><td>Beat</td><td>Sub/Dembow (80–120Hz)</td><td class="mono gr">NO TOCAR</td><td style="font-size:.73rem;color:var(--t3)">El perreo vive en esa frecuencia</td></tr>
          <tr><td>Glue Comp</td><td>Master</td><td>Ratio</td><td class="mono gr">4:1</td><td style="font-size:.73rem;color:var(--t3)">Más glue para pegar el punch del beat con la voz</td></tr>
          <tr><td>Limiter</td><td>Master</td><td>LUFS target</td><td class="mono gr">-10 a -12 LUFS</td><td style="font-size:.73rem;color:var(--t3)">Más volumen y presencia para el género</td></tr>
        </tbody></table></div>
      </div>
      <div class="gdata" data-gs="salsa">
        <div class="alert" style="background:rgba(245,158,11,.08);border-color:rgba(245,158,11,.25);color:#fcd34d;margin-bottom:18px"><span class="ai">🎺</span><p><strong>Salsa — Dinámico, natural, preservar los bronces, menos compresión.</strong> La dinámica es parte del estilo de la salsa. No aplastes esa diferencia.</p></div>
        <div class="gtable-wrap"><table class="gtable"><thead><tr><th>Plugin</th><th>Canal</th><th>Parámetro</th><th class="gs">Valor Salsa</th><th>¿Por qué este valor?</th></tr></thead><tbody>
          <tr><td>Melodyne</td><td>Vocal</td><td>Retune Speed</td><td class="mono gs">40–55%</td><td style="font-size:.73rem;color:var(--t3)">Más natural — el feeling vocal de la salsa es expresivo</td></tr>
          <tr><td>EQ Pre</td><td>Vocal</td><td>Low Cut</td><td class="mono gs">85 Hz, 12dB/oct</td><td style="font-size:.73rem;color:var(--t3)">Corte suave — preservá el "pecho" de la voz salsera</td></tr>
          <tr><td>Compresor</td><td>Vocal</td><td>Ratio / Attack</td><td class="mono gs">2.5:1 / 35ms</td><td style="font-size:.73rem;color:var(--t3)">Suave — preservá la dinámica natural de la interpretación</td></tr>
          <tr><td>Reverb</td><td>Vocal</td><td>Tipo / Decay</td><td class="mono gs">Plate / 1.8s</td><td style="font-size:.73rem;color:var(--t3)">Plate es el reverb clásico de las grabaciones de salsa</td></tr>
          <tr><td>Saturación</td><td>Vocal</td><td>Drive</td><td class="mono gs">10% máximo</td><td style="font-size:.73rem;color:var(--t3)">Muy sutil — el sonido analógico del vinilo de salsa</td></tr>
          <tr><td>EQ Beat</td><td>Beat</td><td>Dip para voz</td><td class="mono gs">-2 dB @ 2.5kHz Q:2.5</td><td style="font-size:.73rem;color:var(--t3)">Q más estrecho — los bronces también viven en 2-4kHz</td></tr>
          <tr><td>Glue Comp</td><td>Master</td><td>Ratio / Attack</td><td class="mono gs">2:1 / 50ms</td><td style="font-size:.73rem;color:var(--t3)">Muy suave — preservar la dinámica y el punch del timbal</td></tr>
          <tr><td>Limiter</td><td>Master</td><td>LUFS target</td><td class="mono gs">-14 a -16 LUFS</td><td style="font-size:.73rem;color:var(--t3)">Más dinámico — no aplastes la dinámica de la salsa</td></tr>
        </tbody></table></div>
      </div>
    </div>

  ` }} />
  );
}
