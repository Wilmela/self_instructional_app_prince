import React from "react";
import {
  fd1,
  fd2,
  fd3,
  fd4,
  fd5,
  fd6,
  fd7,
  fd8,
  fd9,
  fd10,
  fd11,
  fd12,
  fd13,
  fd14,
  fd15,
  fdcover,
  fe1,
  fe2,
  fe3,
  fecover,
  mecover,
  mt1,
  mt2,
  mt3,
  mt4,
  mt5,
  mt6,
  mtcover,
  fmcover,
  fm1,
  wheels,
  w1,
  w2,
  w3,
  w4,
  w5,
  w6,
  w7,
} from "@/assets/images";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ImageProps,
} from "react-native";
import { FONTS, SIZES } from "./theme";

const HeadingText = ({ text }: { text: string }) => (
  <Text
    style={{
      fontFamily: FONTS.RBold,
      fontSize: SIZES.large,
      color: "#222",
    }}
  >
    {text}
  </Text>
);
const Caption = ({ text }: { text: string }) => (
  <Text
    style={{
      fontFamily: FONTS.RMedium,
      fontSize: SIZES.normal - 4,
      fontStyle: "italic",
      color: "#333",
      textAlign: "justify",
    }}
  >
    {text}
  </Text>
);
const SubHeadingText2 = ({ text }: { text: string }) => (
  <Text
    style={{
      fontFamily: FONTS.RMedium,
      fontSize: SIZES.normal,
      color: "#333",
      textAlign: "justify",
    }}
  >
    {text}
  </Text>
);
const SubHeadingText = ({ children }: { children: React.ReactNode }) => (
  <Text
    style={{
      fontFamily: FONTS.RLight,
      fontSize: SIZES.normal + 2,
      color: "#333",
      textAlign: "justify",
    }}
  >
    {children}
  </Text>
);
const Content = ({ children }: { children: React.ReactNode }) => (
  <Text
    style={{
      fontFamily: FONTS.RLight,
      fontSize: SIZES.normal,
      color: "#333",
      textAlign: "justify",
    }}
  >
    {children}
  </Text>
);

const Container = ({ children }: { children: React.ReactNode }) => {
  return <View style={{ width: "100%", height: "auto" }}>{children}</View>;
};

const ContentImg = ({ url, mv }: { url: ImageProps; mv?: number }) => {
  const { height } = useWindowDimensions();

  return (
    <Image
      source={url}
      resizeMode="contain"
      style={{
        width: "100%",
        height: height * 0.55,
        marginVertical: mv || -150,
      }}
    />
  );
};

export default [
  // Machine Tools
  {
    topic: "Machine Tools",
    bgImg: mtcover,
    content: () => (
      <>
        <HeadingText text="Introduction" />
        <SubHeadingText>
          A metal workshop machine which performs the material removal operation
          with tool, to produce desired shape and size of the workpiece is known
          as a machine tool. The purpose of machine tools is to save time, cost
          of production and to get better output which cannot be obtained with
          hand tools with manual operation.
          {`\n`}
        </SubHeadingText>
        <SubHeadingText2 text="Types of Machines" />
        <Content>
          The various types of machine tools commonly used in workshops are
          lathe, shapers, planners, drilling machine, grinding machines and
          milling machines.
          {"\n"}
          {"\n"}
          Lathe: the lathe is known and refers to as the father of all
          production machines, it is the most important machines in any
          workshop; it is a machine tool that is uses cutting tool for removing
          the material from the surface of the workpiece. Its main objective is
          to remove material from outside by rotating the work against a
          “cutting tool”. It is used to produce cylindrical work, yet it may
          also be used for many other purposes such as drilling, threading,
          grinding, milling etc. in lathe, workpiece is held in a chuck or
          between centers and rotate about its axis at a uniform speed. The
          cutting tool held in the tool post is fed into the workpiece for a
          desired depth and in the desired direction.
          {"\n"}
          {"\n"}
          Types of lathe Though the fundamental principle of operation of all
          lathes is same and perform the same function, yet they are classified
          according to the design type of drive arrangement of gear and purpose.
          The following are the various types of lathes found in the
          metal/mechanical workshops; {"\n"}
          1. Speed lathe: this type of lathe is driven by high speeds usually
          from 1200 to 3600 r.p.m. it is usually used for metal spinning,
          polishing, wood working etc. {"\n"}
          2. Engine or Centre Lathe: it is a general purpose lathe and is widely
          used in workshop. It differ from a speed lathe, that it has additional
          mechanism for controlling the spindle speed. {"\n"}
          3. Special Purpose Lathe: The works which cannot be conveniently
          accommodated on a standard lathe the special purpose lathe are used.
          {"\n"}
          4. Automatic lathe: these are so designed that the tool are
          automatically fed into the work and withdrawn after all the operations
          are complete to finish the work. Since the entire operations are
          {"\n"}
          automatic, this lathe requires little attention of the operator.{"\n"}
          5. Bench Lathe: this lathe is so small that it can be mounted on the
          bench. All the types of operations can be performed on the lathe that
          may be done in an ordinary speed or Centre lathe. It is used for small
          work.
        </Content>
        <SubHeadingText2 text="Principle Parts of a lathe are:" />
        <Content>
          Like all other machines found in the workshop possesses different
          parts so do lathe, the following are some of the principle parts of
          the lathe {"\n"}
          1. Bed: this part of the lathe holds or supports all other parts of
          the lathe. {"\n"}
          2. Headstock: all lathe receive their power through the head stock.{" "}
          {"\n"}
          3. Tailstock: this is the counterpart of the headstock and is situated
          at the right hand end of the bed. It is used for supporting the work
          when turning on the center.{"\n"}
          4. Carriage: this control and supports the cutting tool. It moves on
          the ways of the bed.{"\n"}
          5. Feed Mechanism: the feed mechanism of a lathe is employed for
          imparting various feed to the cutting tool.{"\n"}6. Tool Post: This is
          mounted on the compound rest. It is used to hold various cutting tool
          holders, the holder rest on a wedge which is shaped on the bottom to
          fit into a concave shaped ring.{"\n"}
          7. Lead Screw: it is used for converting rotational movement into
          linear movement.{"\n"}
          8. Guide ways: they guide the moving parts in a machine tool. They act
          as a mediator for transmitting forces to the bed of a machine tool.
          {"\n"}
          9. Spindle: it is hollow shaft used for transmitting power from the
          transmission system to the workpiece. {"\n"}
          10. Feed Gear Box: feed gear box is used for transmitting power from
          spindle to the lead screw at different speeds
        </Content>
        <SubHeadingText2 text="Terms used in Lathe Machining " />
        <Content>
          The following terms are commonly used while machining a workpiece on
          the lathe {"\n"}
          Cutting Speed: it is defined as the speed at which the material is
          removed by the cutting tool from the workpiece.{"\n"}
          Feed: is defined as the distance which the tool advances for each
          revolution of the workpiece. {"\n"}
          Depth of Cut: it is the depth of penetration of the tool into the
          workpiece during machining.
        </Content>
        <SubHeadingText2 text="Lathe Accessories" />
        <Content>
          The lathe accessories are used for holding and supporting the
          workpiece or for holding the cutting tool. The various lathe
          accessories found are:{`\n`}
          1. Centres: there are two types of centers i.e live center and dead
          center. A centre which fits into the headstock spindle and revolves
          with the workpiece is called live center while the centre which is
          used in a tailstock spindle and does not revolve is called dead
          centre.{`\n`}
          2. Chuck: it is an important device used for holding and rotating the
          workpiece in a lathe. The workpieces which are too short to be held
          between centres are clamped in a chuck. There are many types of chuck,
          but the following two are commonly used; a. Three Jaw universal cuck:
          this is also called self-centering chuck. This chuck is used for
          holding round and hexagonal workpiece. b. Four Jaw Indecent Chuck:
          this type of chuck is used for holding square, round and irregular
          shapes of work. {`\n`}
          3. Mandrel: this accessary is used to hold hollow workpiece to
          machining their external surfaces. This lathe mandrel is a cylindrical
          bar with centre hold at each end.{`\n`}
          4. Face plate: the face plate is used for holding work pieces which
          cannot be conveniently held in a chuck.{`\n`}
          5. Angle plate: this is always used with the face plate for holding
          such parts which cannot be clamped against the vertical surface of a
          face plate.
        </Content>
        <SubHeadingText2 text="LATHE TOOLS" />
        <Content>
          The tool used in a lathe, for general purpose work is a single point
          tool but for special operations multi-point tools may be used. The
          lathe tools depending upon the nature of operation done by the tool
          are classified as {"\n"}
          1. Turning tool {"\n"}
          2. Facing tool.{"\n"}
          3. Chamfering tool.{"\n"}
          4. Form or profile tool.{"\n"}
          5. Parting tool.{"\n"}
          6. External threading tool.{"\n"}
          7. Internal threading tool.{"\n"}
          8. Boring tool.{"\n"}
          9. Knurling tool
        </Content>
        <SubHeadingText2 text="LATHE OPERATIONS " />
        <Content>
          The most common operations which can be carried out on a lathe are
          facing, plain turning, step turning, temper turning, drilling,
          reaming, boring, undercutting, threading, and knurling.{"\n"}
          {"\n"}
          Facing: in this operation the workpiece is held in the chuck and the
          facing tool fed from the centre of the workpiece towards the outer
          surface or from the outer surface to the centre, with the help of a
          cross-slide.
          {"\n"}
          {"\n"}
          Plain turning: it is an operation of removing excess amount of
          material from the surface of a cylindrical workpiece.{"\n"}
          {"\n"}
          Step Turning: it is an operation of producing various steps of
          different diameters on the workpiece. The operation is carried out in
          the similar way as plain turning.
          {"\n"}
        </Content>
        <ContentImg url={mt1} />
        <Caption text="Facing                                Plain Turning                        Step Turning" />

        <Content>
          {"\n"}
          Taper Turning: this is an operation of producing an external conical
          surface on a workpiece.
          {"\n"}
          {"\n"}
          Drilling: it is an operation of producing a cylindrical hole in a
          workpiece with the help of a drill. The workpiece is held in a chuck
          and the drill is held in the tailstock.
          {"\n"}
          {"\n"}
          Reaming: A reaming is an operation of finishing the previously drilled
          hole. In a reaming process a reamer is held in the tailstock and it is
          fed into the hole in the similar way as for drilling.
          {"\n"}
          {"\n"}
          Boring: it is operation of enlarging a hole already made in a
          workpiece. In this operation a boring tool or a bit mounted on a rigid
          bar is held in the tool post and fed into the workpiece by hand or
          powered in the similar way as for turning.
        </Content>
        <ContentImg url={mt2} />
        <Caption text="       Drilling                                                     Reaming" />
        <ContentImg url={mt3} />
        <Caption text="   Boring                                                              Undercutting" />
        <Content>
          {"\n"}
          {"\n"}
          Undercutting or Grooving: it is an operation of reducing the diameter
          of a workpiece over a very narrow surface. In this operation a tool of
          appropriate shape is fed into the revolving workpiece up to the
          desired depth at right angles to the centre line of the workpiece.
          {"\n"}
          {"\n"}
          Threading: it is an operation of cutting helical grooves on the
          external cylindrical surface of workpiece. In this operation, the work
          is held in a chuck or between centres and the threading tool is fed
          longitudinally to the revolving workpiece. {"\n"}
          {"\n"}
          Knurling: the operation of producing knurled surface on the workpiece
          is called knurling. Here a knurling tool is moved longitudinally to a
          revolving workpiece surface. The projections on the knurled tool
          reproduced depressions on the work surface.
        </Content>
        <ContentImg url={mt4} />
        <Caption text="   Threading Tool                                                              Knurling Tool" />

        <ContentImg url={mt5} mv={-90} />
        <Caption text="Carriage" />

        <ContentImg url={mt6} mv={-1} />
        <Caption text="Lathe Machine" />
      </>
    ),
  },

  // Fuel System
  {
    topic: "Fuel System",
    bgImg: fecover,
    content: () => (
      <>
        <HeadingText text="Introduction" />
        <SubHeadingText>
          The internal combustion engine produces power by burning fuel and
          converting the chemical energy of the fuel into thermal (heat) energy.
          S.I. engines use gasoline (Petrol/Fuel) and generally carburetor fuel
          system which applies a combustible mixture of air and petrol at
          different proportions depending upon engine operating condition.
          {"\n"}
          {"\n"}
          The purpose of the fuel system in S.I. engines is to store adequate
          quantity of fuel and to pump it to the carburetor; the fuel system
          also prepares the air fuel mixture for combustion in the cylinder and
          carries the exhaust gas to the rear of the vehicle. It maintains a
          rate of flow and pressure sufficient to meet all the demand of speed
          and load placed on the carburetor.
        </SubHeadingText>
        <SubHeadingText2 text="COMPONENT OF THE FUEL SYSTEM " />
        <Content>
          The main components of the fuel system are 1. Fuel Tank: the tank is
          made of two halves of corrosion resistant steel which are ribbed for
          additional strength and welded together. Exposed section of the tank
          generally made of heavier steel for protection from road damage and
          corrosion. The tank design and capacity depend on the available space,
          filter location, fuel expansion room and fuel movement. A filter tube
          is placed in the tank to avoid complete filling to the tank. The air
          space created at the top of the tank allows space for fuel expansion.
          {"\n"}
          2. Fuel Lines: the components of the fuel system are connected by fuel
          and vapour liens and hoses. These allow supplying fuel to carburetor
          to return excess fuel to the tank and to carry fuel vapour. Fuel lines
          must be routed so as to remain as cool as possible, fuel supply line
          from the tank to the carburetor are mounted to follow the frame along
          the under-body of the car. {"\n"}
          3. Carburetor: automobile spark ignition engine uses combustible
          mixture of gasoline and air, carburetion is the mixing of gasoline
          fuel with air to get a combustible mixture. A carburetor mixes the
          correct amount of fuel into the incoming air to give the engine a
          combustible charge. The air-fuel ratio required by an engine depends
          upon temperature, load and speed of the engine.
        </Content>
        <SubHeadingText2 text="Carburetor must meet the following main requirements " />
        <Content>
          1. Easy start of engine at any temperature. {"\n"}
          2. Smooth operation of engine at variable loads and speeds. 3. Maximum
          power at full load. {"\n"}
          4. Best fuel economy 5. Good accelerating capabilities
        </Content>
        <SubHeadingText2 text="FUEL PUMP " />
        <Content>
          Carbureted Engines frequently have low-pressure mechanical pumps
          located outside the fuel tank. Fuel pumps transfers petrol from the
          tank to carburetor tough a fire grain filter. The pump must deliver
          petrol in sufficient volume and pressure to keep the carburetor bowel
          full of clean petrol. The fuel pressure must be kept below certain
          limits in order for the engine to work properly if the fuel pressure
          is too high, the engine will run rough and rich because it won’t use
          all of the gasoline pumped, making it inefficient and polluting. The
          engine might misfire, lean or store if the pressure is too low.
        </Content>
        <SubHeadingText2 text="TYPES OF FUEL PUMP" />
        <Content>
          There are two main types of fuel pumps including mechanical fuel pumps
          and electrical fuel pumps.{"\n"}
          Mechanical Fuel Pumps: prior to the widespread use of electric fuel
          injection, most gasoline engines relied on mechanical fuel pumps to
          transport fuel from the fuel tank to the carburetor bowl. The
          eccentricity of the engines camshaft drives the mechanical fuel pumps.
          It is located on the in-line cylinder block engines side. The most
          popular mechanical gasoline pumps are plunger-type and diaphragm
          pumps. A well-known positive displacement pump is the diaphragm pump.
          Similar to a positive pump, this pump has a pump chamber whose volume
          raises or lowers depending on the deflection of the flexible membrane.
        </Content>
        <ContentImg url={fe1} mv={-80} />
        <Caption text="Mechanical Fuel Pump" />
        <Content>
          Electrical fuel pumps are often used in modern cars fuel tanks. This
          pump pumps gasoline/petrol into the engine by creating high pressure
          in the fuel line
        </Content>
        <ContentImg url={fe2} mv={-80} />
        <Content>
          The boiling point of a gasoline increases as pressure rises. The
          components that take up the gasoline vapors from the engine (the pump
          itself) and submerge it in cold liquid are minimized by placing the
          pump within the fuel chamber. Another benefit of putting the electric
          fuel transfer pumps within the fuel chamber is that it reduces the
          risk of fire, spanks are generated and fuel vapor are ignited by
          electric equipment (such as fuel pump) but liquid fuel doesn’t
          explode. As a result, one of the most critical locations is to
          submerge the pump in a fuel chamber. By replacing the mechanical fuel
          pump with an electrical fuel pump, you may lessen the stress on the
          engines components while also lowering the engines fuel consumption.{" "}
        </Content>

        <Content>
          {"\n"}
          What kills a Fuel Pump? {"\n"}
          Rust, dirt or debris in the gas tank may swiftly destroy a gasoline
          pump. Rust develops on older steel tanks, whereas plastic tank begin
          to degrade after 8-10years.
          {"\n"}
          {"\n"}
          How many years does a fuel pump last?
          {"\n"}
          Fuel pumps are not serviced on a regular basis and must be replaced
          only when they fail, the majority of fuel pumps should last for at
          least 100,000 kilometers.
          {"\n"}
          {"\n"}
          What happens if the fuel pump is bad?
          {"\n"}
          Our vehicles performance and drivability will be severely hampered by
          a defective fuel pump. If your fuel-to-air ratio is wrong and the
          cylinders aren’t getting enough fuel, the pistons won’t fire and our
          engine will struggle to propel the car ahead, you automobile will
          simply not start if your fuel pump is damaged sufficiently.
          {"\n"}
          {"\n"}
          Can one clean a fuel pump?
          {"\n"}
          If your car has an electric fuel pump, you may clear any sediment
          build-up or obstruction with a fuel system cleaning. You can actually
          open the pump to remove debris out of its internal filter if you have
          a manual one but it is not an option in most new vehicles.
        </Content>
        <SubHeadingText2 text="Fuel Filter" />
        <Content>
          Despite all the care taken in refining, during storing and delivering
          of gasoline some impurities get into the automobile fuel system. Fuel
          filters remove dirts, rust, water and other harmful materials from the
          gasoline before it reaches the carburetor. During use the filters
          become dogged and hence restrict fuel-flow if they are not cleansed or
          replaced according to the manufacturers recommendations. Several
          different types of fuel filters are in use and some systems contain
          two or even more filters. Filters are being located in several places
          within the fuel system.
          {"\n"}
          {"\n"}
          {"\n"}
          The following are some types of fuel filter. {"\n"}
          1. Fuel Tank Filters and Strainers: this is fitted to the end of the
          fuel pick-up tube inside the fuel tank. It prevents sediment, settled
          at the bottom of the tank from entering the fuel line, it also prevent
          against water contamination by plugging itself up. {"\n"}
          2. In-Line Filter: it is installed in the line between the fuel pump
          and carburetor. This protects the carburetor from contamination but
          does not protect the fuel pump. {"\n"}
          3. Carburetor Inlet Filter: some automobile manufacturers install a
          filter at the carburetor inlet. The filter is screwed into the
          carburetor fuel in-let and is clamped to the inlet at the other end.
          {"\n"}
          4. Pump Outlet Filters: some cars incorporate fuel filters at the
          outlet side of the fuel pump. Pic a shows the filter is installed in
          the fuel pump outlet tower whereas in pie B it is located at the
          bottom of the pump. {"\n"}
          5. Air Cleaner-cum-filter: air contains dirt, abrasives and other
          contaminates which cannot be allowed to reach the engine air cleaner
          are used to remove contaminates from the air. It has three primary
          functions{"\n"}
          a. To clean air before mixing with fuel. {"\n"}
          b. To silence intake noise. {"\n"}
          c. To act as a flame arrester in the case of backfire.
          {"\n"}
          6, Emission Vapor Controls: these controls use in combination with
          fuel return lines. This part of the overall system is used to prevent
          petrol vapors from being discharged into the ambient air. When this
          happen, following some bad things can happen; {"\n"}
          a. A bad odor of gasoline enters the car. {"\n"}
          {"\n"}
          2. The earth-shattering roar of gasoline fumes ignites. {"\n"}
          3. It is bad for the environment 7, Fuel Pressure Regulators; this
          unit of the fuel delivery system makes sure that the system properly
          maintains a proper amount of pressure. The fuel pressure regulator
          unit I most commonly used in fuel injector
        </Content>
        <ContentImg url={fe3} mv={-1} />
        <Caption text="S.I. Engine Fuel system" />
      </>
    ),
  },

  // Start of Properties of Metal
  {
    topic: "Properties of Metal",
    bgImg: mecover,
    content: () => (
      <>
        <HeadingText text="Introduction" />
        <SubHeadingText>
          Iron is the most important of all metals. It is the primary metal used
          to make a variety of steels which are the most popular engineering
          materials of our times the allotropic property of iron is responsible
          for obtaining different micro structures on the various forms of
          steels. Iron is also an excellent solvent for money metals. Each
          particular metal is developed or selected because of it
          characteristics or properties in relation to its use. The typical
          properties which are considered in the selection and production of
          metal products include: weight harness, toughness, brittleness,
          corrosion resistances, response to heat treatment and machinability. A
          basic idea of various metals and their properties is importance for
          workers engaged in the design, fabrication, and maintenance of metal
          products. Metals can be hardened, softened, bent, twisted, pulled
          apart or fractured, depending on the properties which they are made up
          of or which they possess.
        </SubHeadingText>
        <SubHeadingText2 text="The properties of metals maybe classified in three main groups namely; " />

        <Content>
          1. Physical properties: This property includes those characteristics
          used to describe a substance which is not being acted by external
          forces. It includes items like weight heat conductivity, colour,
          fusibility etc. {"\n"}
          2. Chemical properties: these properties include characteristics
          concerned with the chemical composition and chemical reactions of
          materials – resistance to corrosion and the effects of alloying.{"\n"}
          3. Mechanical properties: these are those characteristics which
          describe the behavior of metal which is being acted upon by external
          forces, e.g tensile strength hardness, ductility and machinability
          etc. some of the more significant mechanical properties which should
          be understood by all engineers, technicians or student in the
          engineering field are described below;{"\n"}
          a. Hardness: hardness implies the ability of metal to resistance to
          scratching, marking, cutting, penetrate and wear metal-cutting tools
          are made of metal which rank high in hardness. This property may be
          increased or decreased in many metals by various methods heat
          treatment. Tools are mechanized to shape while soft. They are then
          hardened by heat treatment to provide strength and durability.
          Examples of metals that possess this property are as follows; ball and
          roller bearing, cam, gears, cutting tools etc. {"\n"}
          b. Hardenability: hardenability is the property which enables a metal
          to harden completely through to its center when a heat-treatment
          method is used. Some metals are ranked low in hardenability. This
          means that they harden significantly on the surface layer only while
          they remain relatively soft at the core or center. {"\n"}
          c. Brittleness: brittleness is the undesirable property of breaking
          without deformation or warning. Gray cast iron is brittle in
          comparison with unhardened steel, under a heavy blow the cast iron
          will break apart while steel usually will bend instead of breaking.
          Brittleness is related to hardness in metals; as the hardness of a
          metal is increased, its brittleness also is increased. {"\n"}
          d. Ductility: ductility is the quality of being drawn into fine-wire,
          twisted or changed in shape without breaking. Metal which are ranked
          high in ductility are copper, aluminum, and soft steel. Ductile metals
          fail or break gradually with increased stress or load. {"\n"}
          e. Malleability: malleability is the property of being bent, hammered
          or rolled without fracture. Most ductile metals are malleable.
          However, fracture. Most ductile metals are malleable. However, there
          are some exceptions, such as load, lead lacks sufficient tensional
          strength to be stretched very far. Therefore it is not ductile. {"\n"}
          f. Toughness: toughness is the ability of a metal to withstand
          bending, twisting or shock – without breaking. Toughness should not be
          confused with hardness, since it is possible to have a combination of
          hardness and negligible toughness e.g. a file is both hard and tattle.{" "}
          {"\n"}
          g. Machinability: machinability is a property of metal which indicate
          the ease with or to which metals may be worked. Many factors are
          considered in arriving ones are rated of metal removal, quality of the
          finished surface and tool life. {"\n"}
          h. Fatigue: fatigue could be referred to as the puzzling property
          which has become so important recently in the study of fast-moving
          aircraft and rockets that of causing metal to deteriorate in strength
          under repeated applications of loads which is considerably below the
          tensile strength of the metal. By repeated bending, a piece of metal
          may be broken due to fatigue. Springs, propeller shafts, gear teeth or
          other machine parts subjected to repeated vibration sometimes fail due
          to fatigue. {"\n"}
          i. Conductivity: conductivity is the property that makes metals to
          conduct heat and electricity well. Silver, copper and aluminum, in
          that order is the best conductor of heat and electricity. {"\n"}
          j. Strength: strength of a metal is its resistance to deformation. The
          common types of strength as a property of metal are tensile strength,
          compressive strength, shear strength and torso or twisting strength.
          Tensile strength is that property of a material which resists
          tensional forces applied metal usually is expressed in terms of
          millions of Pascal’s (MPs) (Thousands of pounds per square inch (PSI).
          {"\n"}
          k. Fusibility: fusibility is that property of metal which enable them
          to be joined readily with another metal when heated to a liquid state.
          Fusibility is one of the important properties in welding. Metals which
          are ranked high in fusibility generally can be welded with ease.{" "}
          {"\n"}
          l. Elasticity: this is the property of a metal to regain its original
          shape after deformation when the external forces are removed. This
          property is desirable for materials used in tools and machine. It may
          be noted that steel is more elastic than rubber. {"\n"}
          m. Resilience: it is the property of a metal to absorb energy and to
          resist shock and impact loads. Thus property I essential for spring
          materials. {"\n"}
          n. Creep: when a part is subjected to a constant stress at high
          temperature for a long period of time, it will undergo a slow and
          performed deterioration called creep. This property is considered in
          metals used in designing internal combustion engines, boilers and
          turbines. {"\n"}
          o. Fatigue: fatigue is the property that causes metal to fracture in a
          repeated load which is considerably below the tensile strength of the
          material by repeated bending, a piece of metal maybe broken due to
          fatigue, e.g. repelled shafts, gear-teeth and other parts of machines
          subjected to reaped vibration. {"\n"}
          p. Plasticity: plasticity is the property of a metallic material which
          permits permanent deterioration to occur without rupture.
        </Content>
      </>
    ),
  },

  //Building drawing start
  {
    topic: "Foundry Tools",
    bgImg: fdcover,
    content: () => (
      <>
        <HeadingText text="Introduction" />
        <SubHeadingText>
          Foundry is a place where castings are produced. Casting in the
          industry or workshops is a process of pouring molten metal into a mold
          and allowing it to solidify to take a desired shape The foundry tools
          and equipment are divided into the following five groups 1. Hand tools{" "}
          {"\n"}
          2. Molding boxes (flashes) {"\n"}
          3. Molding machines {"\n"}
          4. Melting equipment, and {"\n"}
          5. Pouring equipment
          {"\n"}
        </SubHeadingText>
        <SubHeadingText2 text="Foundry hand tools commonly employed in foundry process are " />
        <ContentImg url={fd1} mv={-60} />
        <Container>
          <Content>
            3. Rammer: a hand rammer is made of wood or metal. It has a wedge
            shape construction at one end (called peen) and a cylindrical shape
            at the other and (called butt). It is used for packing and ramming
            the sand for bench molding
          </Content>
          <ContentImg url={fd2} />
          <Content>
            4. Mallet: it is used to lessen the pattern in the mold so that it
            can be withdrawn easily.
          </Content>
          <ContentImg url={fd3} mv={-90} />
          <Content>
            5. Strike-off-bar: it is a straight bar of wood or steel usually of
            rectangular cross-section. It is used to trickle or strike off
            excess molten metal to provide a level and smooth surface.
          </Content>
          <ContentImg url={fd4} mv={-100} />
          <Content>
            6. Vent wire: this is similar to a knitting needle. It has a pointed
            edge at one end, a handle at the other end. It is used to pierce
            holes in the rammed sound/metal to provide artificial vents which
            permit the easy escape of steam and gases generated by the hot metal
            in contact with the object.
          </Content>
          <ContentImg url={fd5} mv={-100} />
          <Content>
            7. Slick: a slick is a small double ended tool having a flat surface
            in one end and a spoon on the other. It is used for repairing and
            finishing the mold surface after the pattern is withdrawn
          </Content>
          <ContentImg url={fd6} mv={-70} />
          <Content>
            8. Lifter: it is used for smoothing and cleaning out depression in
            the mold
          </Content>
          <ContentImg url={fd7} mv={-70} />
          <Content>
            9. Swab: it is a small brush having long ramp fibres. It is used for
            moisturing the casted metal before the pattern is removed.
          </Content>
          <ContentImg url={fd8} />
          <Content>
            10. Gate Cutter: this is U-shaped piece of thin sheet. It is used
            for cutting a shallow through in the mold to act as a passage for
            the hot metal.
          </Content>
          <ContentImg url={fd9} mv={-70} />
          <Content>
            11. Spur cutter: this is also known as rammer peg. It is a tapered
            wooden peg. It is forced into the top part of the mold (known as
            cope) at the correct position. When the peg is withdrawn, it leaves
            a cavity (called gate) through which a molten metal is poured.
          </Content>
          <ContentImg url={fd10} mv={-90} />
        </Container>

        <SubHeadingText2 text="MOLDING BOXES (FLASKS)" />
        <Container>
          <Content>
            The metal mold is prepared in a specially constructed box called
            flasks, which are open in the top and bottom. The flasks can be made
            of either wood or metals. The metal flasks of steel, cast iron,
            magnesium or aluminum alleys are widely used in production work
            because of their rigidity. Two types of flasks are widely used in
            foundry, namely; {"\n"} {"\n"}
            Box Type Flask – This is used for small and medium-sized castings.
            Snap flask – often used in the production of small casting and in
            machine molding.
          </Content>
          <ContentImg url={fd11} mv={-90} />
        </Container>
        <SubHeadingText2 text="Molding Machines" />
        <Container>
          <Content>
            The molding machines performs the following operations {"\n"}
            1. Ramming of casted metal or sand in the mold {"\n"}
            2. Lifting or drawing of pattern from the mold and {"\n"}
            3. Rolling over the mold section {"\n"}
            {"\n"}
            The two main classes of molding machines are; 9. Hand Molding
            Machine, and {"\n"}
            10. power Molding Machine {"\n"}
            {"\n"}
            The hand molding machine is manually operated while the power
            molding machine is power driven. The power driven is used to
            eliminate the manual labour of ramming and at the same produce
            better mold.
          </Content>
          <ContentImg url={fd12} mv={-60} />
        </Container>
        <SubHeadingText2 text="Melting Equipment " />
        <Content>
          The metal is required to be melted at a correct temperature before
          pouring it into a mold. The following furnaces are commonly used for
          melting the metal. {"\n"}
          1. Cupola Furnaces {"\n"}
          2. Pen Health Furnaces {"\n"}
          3. Electric furnaces{"\n"}
          4. Crucible furnaces {"\n"}
          The first three types of furnaces are mostly used for melting ferrous
          metal. Crucible furnace is used for melting non-ferrous metal.
        </Content>
        <SubHeadingText2 text="Pouring Equipment " />
        <Content>
          The commonly used pouring equipment for pouring the metal from the
          furnace are ladles. The common practice is to store that molten metal
          temporarily into large holding ladles, from which it is tapped off as
          needed. These holding ladles are constructed of steel plate lined with
          a suitable refractory such as fire brick.
        </Content>
        <SubHeadingText2 text="Types of Ladles" />
        <Container>
          <Content>
            1. Hand or shank Ladles: this type of ladies are used for casting
            very small mold. It can hold about 15kg of metal and has only one
            handle or shank
          </Content>
          <ContentImg url={fd12} mv={-60} />
          <Content>
            2. Bull Ladles: these are larger sizes of shank ladles capable of
            holding 30kg to 60kg of molten metal. This ladle requires two
            workers to carry, and to rotate the shank for pouring out liquid
            metal.
          </Content>
          <ContentImg url={fd13} mv={-120} />
          <Caption text="Bull ladle" />
          <Content>
            3. Crane or monorail ladle: this is capable of holding 250kg or more
            molten metal. It is handled by overhead or monorail. These ladles
            are fed from the furnace
          </Content>
          <ContentImg url={fd14} mv={-60} />
          <Caption text="Crane or Monorail Ladle" />
          <Content>
            4. Lip-Pouring Ladles: it is almost difficult to pour clean metal
            free from the molten slag floating on top. Thus the metal at the
            pouring lip is skimmed clean, by means of metal skimming bar, before
            pouring.
          </Content>
          <Content>
            5. Bottom stoppered Ladles: there is a hole in the bottom of the
            ladle. The pouring is done by raising a vertical rod and plug
            covering the hole. The molten metal is poured from the bottom and
            does not disturb the slog which floats on the top.
          </Content>
          <ContentImg url={fd15} mv={-60} />
          <Caption text="Bottom Stopper Ladle" />
          <Content>
            6. Tea-Pot Ladles: these ladles are tilted by a hand wheel connected
            to a pinion, worm and gear wheel. The pouring spout is usually
            inside the body.
          </Content>
        </Container>
      </>
    ),
  },

  //Ferrous Metal start
  {
    topic: "Ferrous Metal",
    bgImg: fmcover,
    content: () => (
      <>
        <HeadingText text="Introduction" />
        <SubHeadingText>
          Metals play an important role in the industries of a nation. Thus it
          is essential for an engineer to know about the sources and techniques
          of its production. The metals used in the industry are of the
          following;
        </SubHeadingText>
        <SubHeadingText2 text="Ferrous Metals and Non-Ferrous Metals " />
        <Content>
          Ferrous Metal are defined as those metals which contain irons as their
          main constitutes such as pig iron, cast iron, wrought iron, steel and
          their alleys. Non-Ferrous Metals are defined as those metals which
          contain a metal other iron as their main constitute such as copper,
          aluminum, brass, tin, zinc etc. The principal raw material for all
          ferrous metal is pig iron. {"\n"}
          Pig iron is the crude form of iron and is used as a raw material for
          the production of various ferrous metals, such as cast iron, wrought
          iron and steel. Pig iron is obtained by melting iron ores in a blast
          furnace. The three principal raw material required for the production
          of pig iron are iron ore, fuel and flux. {"\n"}
          {"\n"}
          Iron ore is any material body from which metal can be economically
          recovered. The iron ores one found in various forms as oxide,
          carbonate and sulphide.
          {"\n"}
          {"\n"}
          Fuel: the most commonly used fuel in a blast furnace is coke. It
          serves the following two purposes; 1. It provides the required heat
          for melting the iron ore, and 2. It combines with the oxygen of the
          ore in order to minimize the same. The coke used should have the
          following properties {"\n"}
          3. It should be hard {"\n"}
          4. Should be of uniform size {"\n"}
          5. It should have high density {"\n"}
          6. Should have a high calorific value and low ash content
          {"\n"}
          {"\n"}
          Flux: the most commonly used flux in a blast furnace is limestone, but
          dolomites are also sometime used. The flux is used for removing
          impurities such as ash, sulphur, and the residues of the burnt fuel.
          The flux melts and drives away the impurities in the form of slag
          leaving pure iron. It may be noted that for each tone of pig iron
          produced, above 500kg to 750kg of limestone is added.
        </Content>

        <Container>
          <SubHeadingText2 text="Manufacture of Pig Iron " />
          <Content>
            Pig Iron is obtain from iron ore in the following steps 1.
            Concentration: Here the iron ore obtained from mine is broken into
            pieces of sizes 25mm to 50mm. after this, other adhering impurities
            like clay sand etc are removed by washing with water and the ore is
            thus concentrated. {"\n"}
            2. Calcination or Roasting: the concentrated ore is then heated in
            shallow kilns in the presence of excess air. During this process,
            most of the moisture, carbon dioxide, sulphur and arsenic are
            expelled out and ferrous oxide is changed to ferric oxide. It is
            porous, less fusible and the desired form of iron oxide. {"\n"}
            3. Smelting: the calcined ore is now submitted to the process of
            smelting. The smelting is carried out in a large tower called blast
            furnace. A blast furnace is a chimney-like structure made of
            heavy-steel plates lined inside with fire bricks to a thickness of
            1.2 to 1.5 meters. It is about 30 meters high with a maximum
            internal diameter of 9 meters at its widest cross-section. The
            portion of the furnace above its widest cross-section is called
            stack and is supported on cast iron pillars. {"\n"}
            {"\n"}
            The blast furnace is used to produce pig iron from iron ore. Three
            things are fed into the blast furnace, namely, iron ore, coke and
            limestone. Together, these three things are called charge. The iron
            ore provides the needed pig iron, the coke burns to provide the heat
            to heat the limestone and the iron ore to a molten state. The
            limestone acts as a flux. Air is also pump into the furnace to
            provide the oxygen needed to make the fire burn. {"\n"}
            Three things come out of the blast furnace, namely {"\n"}
            1. Pig iron {"\n"}
            2. Slag {"\n"}
            3. Waste gas {"\n"}
            {"\n"}
            The operation of the blast furnace is continuous, the charge being
            fed in, the pig iron and slag being drawn off at the bottom as they
            collect. The waste gases escape through pipes at the top. The slag
            floats on top of the molten iron and is drawn off before the iron is
            tapped.
            {"\n"}
            Below is a blast furnace used in the processing of steel
          </Content>
          <ContentImg url={fm1} mv={-1} />
        </Container>
        <Container>
          <SubHeadingText2 text="Blast Furnace" />
          <Content>
            A blast furnace as shown above is a chimney-like structure made of
            heavy steel plate, line inside with fire bricks to a thickness of
            1.2 to 1.5 metres. It is about 30metres high with a maximum internal
            diameter of 9metres at its widest cross-section. The portion of the
            furnace above it widest cross-section is called stack and it is
            supported on cast iron pillars. The top most portion of the stack is
            called throat through which the charge is fed into the furnace. The
            portion of the furnace, bellow its widest cross-section, is known as
            bosh, or burning zone (or zone of fusion) which rest on a short
            cylindrical section called the hearth. The bosh is provided with
            holes for a number of water-jacketed iron blowing pipes known as
            tuyers. The heated air under pressure is forced through the water
            cooled tuyers for the purpose of burning the fuel in furnace. The
            tuyres are 12 to 15 in number and are connected to bustle pipe
            surrounding the furnace. The bustle pipe is, in turn, connected to
            special heaters (known as blast stoves) through a blast pipe.{"\n"}
            {"\n"}
            The stoves are vertical cylinders lined inside with refractory
            material and are used for heating the air blast. Generally, each
            stove is as high as blast furnace and about 6metres in diameter. The
            air blast is pumped through the stoves into a 90cm diameter blast
            pipe from where it is carried to the tuyers. During functioning of
            the blast furnace, the stoves are heated by the waste gas from the
            blast furnace. The top of the furnace is provided with a double cup
            and cone arrangement which prevent the escape of gasses while
            charging the furnace.
            {"\n"}
          </Content>
        </Container>
        <Container>
          <SubHeadingText2 text="CLASSIFICATION OF PIG IRON " />
          <Content>
            Pig Iron is classified according to the contents of free and
            combined carbons as follows; {"\n"}
            These classifications are termed as grades 1. Gray Pig Iron (Grade
            1, 2 and 3). These grades of pig iron contain almost all of free
            carbon or graphite. The percentage of graphite carbon is more than 3
            percent and combined carbon less than 1 percent. The percentage of
            silicon is almost the same as that of free carbon. This is a soft
            variety and has bigger size crystals. {"\n"}
            2. White Pig Iron (Grade 5, 6 and 7). These grades of pig iron
            contain almost all of the carbon in the combined size. The
            percentage of free carbon is less than 1 percent, combined carbon
            more-then 3 percent and silicon less than 1 percent. The crystals
            are close grain. The metal is hard and strong and can be easily
            melted. The white variety of pig iron is used for making wrought
            iron. {"\n"}
            3. Mottled Pig Iron (Grade 4). It is between the grey and white
            variety. It contains equal proportion of free and combined carbon.
            It has a mottled appearance and an average hardness.{"\n"}
            {"\n"}
            The pig iron obtained from blast furnace is most impure and needs
            refining before using it for making suitable casting. In the
            manufacture of cast iron, the furnace used is cupola. Here coke is
            added to pig iron, which is re-melted in the cupola to oxidize the
            carbon to carbon dioxide which goes off as gas. Then the right
            amount of carbon required is left in the molten iron to form cast
            iron. {"\n"}
            {"\n"}
            Cast Iron: the cast iron is primarily an alloy of iron and carbon.
            The carbon contents in cast iron vary from 1.7% to 4.5%. It also
            contains small amount of silicon, magnesium, phosphorus, and sulphur
          </Content>
        </Container>
        <Container>
          <SubHeadingText2 text="Types of cast iron:" />
          <Content>
            The major two types of cast iron is used 1. Grey Cast iron 2. White
            Cast iron Grey Cast Iron has the following composition; i. Carbon =
            3 to3.5 ii. Silicon = 1 to 02:75% iii. Magnesium = 0.40% to 1% iv.
            Phosphorous 0.15% to 1% v. Sulphur 0.02% to 0.15% and the remaining
            is iron White cast Iron it is a particular variety of cast iron
            which shows a white fracture. It compositions are;{"\n"}
            i. Carbon = 1.75 to 2.3% {"\n"}
            ii. Sulphur 0.12 to 0.35% {"\n"}
            iii. Silicon = 0.85 to 1.2% {"\n"}
            iv. Manganese = 0.10% to 0.4% {"\n"}
            v. Phosphorus = 0.05 to 0.20% andthe remaining is iron. The white{" "}
            {"\n"}colour is due to the fact that the carbon is in the form of
            carbide known as cementite. {"\n"}
            {"\n"}
            Wrought Iron: Wrought iron is the purest iron which contains at
            least 99.5% iron but may contain up to 99.9% iron. The typical
            compositions of a wrought iron are as follows;{"\n"}
            1. Carbon = 0.02% {"\n"}
            2. Silicon = 0.12% {"\n"}
            3. Sulphur = 0.018% {"\n"}
            4. Phosphorus = 0.02%, {"\n"}
            5. Slag =0.02% {"\n"}
            {"\n"}
            The remaining is iron. Wrought iron is a tough, malleable and
            ductile material. It cannot stand sudden and excessive shocks. It
            can be easily welded or forged. The melting point of wrought iron is
            about 15300C. It is used for bolts and nuts, chains, crane hooks,
            railway coupling water and steam pipes etc. {"\n"}
            {"\n"}
            In the production of wrought iron, the furnace used is the
            reverberating furnace. Here, scraps of mild steel and ore are mixed
            with pig iron, and melted. They all react with each other thereby
            removing most of the carbon in the pig iron leaving only very little
            percentage required in wrought iron. Slag is tapped and rolled off,
            while the wrought iron is later taken for the production of chain
            hooks, chains, bolts and nuts etc. {"\n"}
            {"\n"}
            Steel: steel is an alloy of iron and carbon with carbon content up
            to a maximum of 1.5%. The carbon occurs in the form of iron carbide,
            because of its ability to increase the hardness and strength of the
            steel. Most of the steel produced now-a-days is carbon steel. Carbon
            steel is defined as steel which has its properties mainly due to its
            carbon content and also not contain more than 0.5% of silicon and
            1.5% manganese
          </Content>
        </Container>
        <Container>
          <SubHeadingText2 text="Manufacturing of Steel" />
          <Content>
            The principle methods of manufacturing steel are; {"\n"}
            1. Cementation process: Here, bars of wrought iron about 2.5 to 3
            meters long and 12 to 18mm thick are embedded in powdered charcoal
            in fire brick boxes placed in a furnace. It is subjected to a high
            temperature of about 10000Cfor 5 to 10 days depending upon the
            quality of steel desired. A period of 5 days produces steel for saw,
            springs, etc. 7 to 8 days for shear steel and 10 days for very hard
            steel suitable for cold chisels. Steel made by this process is
            called cement steel because ferrite in the wrought iron is converted
            into cementite (i.e iron carbide).{"\n"}
            2. Crucible process: the raw material used for the process is
            wrought iron, steel scrap and alloys (like tungsten, chromium or
            Ferro-manganese). Here carbon is added to the iron as the carbon
            content of wrought iron is low. The steel produced by this method is
            very homogeneous, free from slag and dirt and much superior to
            cement steel. {"\n"}
            3. Bessemer process: in this process, cold air under pressure is
            blown through molten pig iron in a refractory limed egg-shaped steel
            vessel, called converter, until elements like silicon, manganese and
            carbon are removed by oxidation. In this process many grades of
            steels are produced e.g low carbon steel, medium carbon steel and
            high carbon steel. {"\n"}
            {"\n"}
            Open-Hearth Process; An open-hearth process utilize the waste heat
            from the furnace to preheat the incoming air needed for combustion
            of the fuel gas in the furnace. Nowadays both gas and liquid fuel
            are used. The furnace consists of a shallow bath which is either
            fixed or can be tilted mechanically, and a back wall, it is
            completely covered by a low roof. The Open-Hearth process takes
            between 7 and 15 hours and modern furnaces have capacities up to 300
            tones. By the methods used, high furnace temperatures are produced
            which allow the mixing of steel scrap with the charge of pig or
            molten iron; this reduces the cost of raw materials. This process is
            much slower than the Bessemer process, allowing for greater control
            of quality of the steel.
          </Content>
        </Container>
      </>
    ),
  },
  //Wheels and Tyres
  {
    topic: "Wheels and Tyres",
    bgImg: wheels,
    content: () => (
      <>
        <HeadingText text="Introduction" />
        <SubHeadingText>
          This is an assembly of the hub, spokes or disc, rim and tyres; the
          wheel supports the whole load and weight of the vehicle and also
          absorbs the road shocks. The rear wheels transmit the power and the
          front wheel steer the vehicles. All the wheels withstand side thrusts
          and resist braking stresses. For the study purposes the wheel assembly
          is divided into three parts wheel, rims and tyres.
        </SubHeadingText>
        <SubHeadingText2 text="WHEELS" />
        <Container>
          <Content>
            Generally two types of wheels are used on the vehicle.{"\n"}
            1. Wire-Wheel: it is a very light wheel therefore generally being
            used in sports cars. This wheel can be fitted and removed very
            easily. It has a spate hub which is attached to the rim by a large
            number of wire spoke which are arranged at different angles so that
            the combined tensions enable the forces due to weight, braking and
            the drive itself to be transmitted form hub to the rim. This
            construction also results an excellent cooling of the brake drums.
            {"\n"}
            2. Disk Wheel: this type of wheel consists of a pressed steel-disc
            instead of wire spokes. The disc may be riveted or welded to the
            inner periphery of the rim. The disc also consists of narrow slots
            near the rim to encourage the cooling of the brake drum. The
            assembly is bolted to the brake drum. This type of wheel is very
            simple, strong and cheap, therefore, being used in most of the
            vehicles. {"\n"}
            {"\n"}
            Below is a picture of Disk-wheel
          </Content>
          <ContentImg url={w1} mv={-100} />
        </Container>

        <Container>
          <SubHeadingText2 text="Rim" />
          <Content>
            The rim of the wheel is so designed by which the mounting and
            dismounting of the tyre can be performed very easily. A “is
            mountable rim” is one that can be removed easily from the wheel. The
            rim for motor vehicles is of five types and they are; {"\n"}
            {"\n"}
            1. Drop-Centre Rim: the central portion of it is rolled into form a
            well. The well permits easy removal or mounting of the tyre. When is
            removed the opposite side of the other is pulled over the flange
            with tyre levers. {"\n"}
            2. Flat-Base Rim: this type of rim is used in buses, trucks and
            other heavy duty vehicles. It is made in three pieces, main rim,
            side ring and locking ring. The rim permits the assembly of the
            modern tyres since there beads have little or no elasticity. {"\n"}
            3. Semi-Dropped Centre Rim: this type of rim is used on light duty
            vehicle. {"\n"}
            4. Divided Type Rim: this type of rim is also having flat base but
            is made into pieces which can be belted together. It is mainly used
            in military vehicles. {"\n"}
            5. Forged or Light Cast Alloy Rim: these are light weight wheels
            made from aluminum or magnesium alloys. These alloy wheels are
            manufactured by casting and forging processes. Sometime wheels are
            made in composite form means that the wheels body with cast aluminum
            alloy and rim with steel. They are most suitable for racing and
            sports cars. {"\n"}
          </Content>
          <ContentImg url={w2} mv={-90} />
          <Caption text="Types of Wheel Rim" />
        </Container>
        <Container>
          <SubHeadingText2 text="TYRES" />
          <Content>
            The tyres are placed and designed around the rims of the vehicle to
            cushion it and its load and the passenger from the shocks and
            vibrations due to the road inequalities. {"\n"}
          </Content>
          <SubHeadingText2 text="TYPES OF TYRES" />
          <Content>
            1. Tubed Tyres: this type of tyre consists of an inner endless tube
            of rubber, containing a value through which air is filled. The air
            is retained under pressures in the tube so that it may act as a
            cushioning medium; both the tube and tyre are mounted in the wheel
            rim. {"\n"}
            2. Tubeless Tyres: in construction they are also similar to the
            tubed type tyres; they are proved with lining inside made of special
            air retainer. This type of tyre does not require an inner tube and
            the air under pressure is filed in the tyres themselves. To retain
            the air in this type of tyre, a non-return valve is fitted to the
            rim. The inner liner act as seals at the edges of the tyres by
            pressing against the wheel rim. The main advantage of this type of
            tyre is that t is lighter and rims cooler than the tubed tyre. In a
            tubeless tyre the nail puncture results is a very little or no air
            loss as long as the nail remains in the tyre. {"\n"}
            3. Studded Tyres: these tyres are special tyres which are proved
            with studs anchored in the tread. The steel studies provide better
            traction in snow and on ice than ordinary tyres. These tyres are
            very noisy due to their extra heavy tread.
          </Content>
          <SubHeadingText2 text="PARTS OF TYRE" />
          <Content>
            Tread: this is the outer part that makes contact with the road.
            There are many varieties {"\n"}
            Inner Linear: this helps the tyre to hold high pressure air inside.
            It is made from a rubber sheet that results in low air permeability.
            Tyre Shoulder: This offers support and protection to the sidewall
            and tread of the tyre. {"\n"}
            Tyre Sidewall: the sidewall of the tyre protects cord plies and
            displays all the necessary information about the product. A sidewall
            communicates the brand name, tyre type, separating etc. {"\n"}
            Beads: ultra-string steel coated rubber is called the beads and
            forms an air tight seal between the tyre and the wheel rim.
          </Content>
          <ContentImg url={w3} mv={-90}/>
          <SubHeadingText2 text="TYRE SIZES" />
          <Content>
            The tyre size and make are always marked on the sides of the casing.
            A tyre marked the size 225 x 400 mm, for example, means that the
            tyre is to be fitted on a rim having 400 mm diameter. The radius of
            the tyre is greater than that of rim by 225mm, when fully inflated.
          </Content>
          <SubHeadingText2 text="TUBES" />
          <Content>
            The air pressure inside the tube depends upon the vehicle and the
            service condition. When the temperature of the tyre rise then the
            pressure inside the tube also rises but under this condition the
            tube must be able to retain the increased pressure. {"\n"}
            Generally two common materials, natural-rubber and synthetic-rubber
            are used to make the tube. The tube tubes made of synthetic rubber
            have blue or red stripes. The tubes made of natural rubber are not
            stripe. {"\n"}
            In a tyre, when two tubes are used, one smaller than the other and
            joined at the rim edge, this type of tube is called “safety tube”.
            When air is filled, first it flows into the inner one and then
            passes to the space between two and equalized. The advantage of this
            tube is that at the time of puncture the air is lost between the two
            tubes and the inner tube retains its air pressure. Therefore, the
            inner tube is made enough strong by reinforcing with nylon fabric.
          </Content>
          <SubHeadingText2 text="TYRE INFLATION PRESSURE" />
          <Content>
            The tyre is designed to operate at particular air pressure keeping
            in view the load and the other characteristics of the vehicle. The
            main purpose to maintain it is to obtain better control and more
            tyre service of the vehicle. The different stages of tyre inflation
            are as given bellow.{"\n"}
            {"\n"}
            1. Under inflation: the in-sufficient pressure wears the sides of
            the treads since the central portion of the tread does not come in
            contact with the road as shown below.
          </Content>
          <ContentImg url={w4} mv={-20} />
          <Content>
            {"\n"}
            The low pressure causes excessive flexing of the side walls which
            results breakage, separation and early tyre failure. The low
            pressure is also a cause of hard steering front wheel shimmy,
            steering kick-back and tyre square on turns.
          </Content>
          <Content>
            2. Over inflation: The over inflation causes abnormal wear in the
            Centre of the tyre tread, see bellow
          </Content>
          <ContentImg url={w5} mv={-30} />
          <Content>
            {"\n"}A tyre with excessive pressure will give a hard ride and is
            subjected to fabric rupture. When a excessively inflated tyre passes
            over a bump its fabric takes the shock without normal flexing in the
            side walls
          </Content>
          <Content>
            3. Proper inflation: The tyre must be inflated under the conditions
            up to the pressure recommended by the vehicle manufacturer. A
            properly inflated tyre has full tread contact with the road. See
            below picture. Thereby equal wearing of the tyre treads.
          </Content>
          <ContentImg url={w6} mv={-30} />
          <Content>
            {"\n"}A proper inflation avoids the hard steering, front wheel
            shimmy, steering kickback, tyre squeal on turns and the pulling of
            vehicle to one side. It also avoids the early failure of the tyre
            since it overcomes all the factors pertain to early failure.
          </Content>
          <SubHeadingText2 text="TYRE INSPECTION" />
          <Content>
            When the vehicle is quite perfect by all means, then the regular
            wearing of the tyres can be seen by inspecting them at the wear
            indicators. The wear indicators are fill-in sections of the thread
            groups. When the tyre thread has worn down enough, the indicators
            indicate the due replacement of the tyres. But the spot damage and
            abnormal wear of the surface and the body of the tyre can be
            inspected by the following methods;
          </Content>
          <ContentImg url={w7} />
          <Content>
            {"\n"}1. Visual inspection: It is outside examining tyre casing for
            abnormal wear, without removing it from the wheel. They abnormal
            wear indicates setting abnormal conditions and do services in the
            stirring, alignment and brake system of the vehicle. The under
            inflation or over inflation of the thread is also inspected from the
            outside. But the internal damages are impossible to visit by this
            method.{"\n"}
            2. Thorough inspection: sometimes the tyre may look good from
            outside but it can be damaged from inside. Under such conditions, it
            is essential to remove the tyre from the wheel and to inspect it
            thoroughly from all the sites. Under this inspection the tube and
            the rim of the wheel are also inspected. The careless installation
            of the tube and rusting or rough surface of the rim may give trouble
            in the wheel. Dirt in the tyre casing, installation of old and wrong
            tube are also factors of wheel troubles and are to be inspected
            duly.
          </Content>

          <SubHeadingText2 text="DESIRABLE TYRE PROPERTIES" />
          <Content>
            The tyres are used in a type automobile whether motor car, buses,
            trucks scooters, heavy earth moving machines and aeroplanes. In
            automobile use, the tyre are made from rubber to strengthen the rim
            as well to reduce the vibrations at the vehicle. Many other
            desirable properties of a tyre are as given under.{"\n"}
            1. Cushioning: The tyre should interpose a cushioning effect between
            the road and the vehicle wheel to absorb shocks resulting from
            high-frequency vibration set up by the irregularities in the road.
            {"\n"}
            2. Balancing: Proper balancing of the tyres is an important factor
            for avoiding wheel wobbling and maintaining good steering of the
            vehicle. For better performance the tyres must be balanced
            “statistically” as well as “dynamically”.{"\n"}
            3. Non-skidding. This is an important property of the tyre, the
            tread of the tyre must be suitably designed to reduce the chances of
            slippage even on wet, muddy and sandy roads.{"\n"}
            4. Load- carrying. The tyre must be designed from such materials so
            they may have flexing property under load. They also must be able to
            sustain the alternating stresses produced due to revolving action of
            the wheels.{"\n"}
            5. Uniform wear. To maintain the good balancing and minimizing the
            slippage of the wheels, a uniform wear of the tyre tread is
            essential. To achieve this property, the tyre tread is provided with
            suitable ribs.{"\n"}
            6. Power consumption. Part of the power transmitted from the engine
            is consumed to roll the tyres on the road. Therefore, tyre material
            must be of such quality so that the power consumption should be
            minimum possible.{"\n"}
            7. Tyre noise. The construction of the tyre and its tread should be
            so designed, that it may produce minimum of noise or loud roar.
          </Content>
          <SubHeadingText2 text="WHEEL AND TYRE TROUBLE SHOOTING " />
          <Content>
            The common troubles of wheels and tyres with their causes are;{" "}
            {"\n"}
            3. Wheel-Wobble: it may be due to wearing out of wheel buckling,
            wrong fitting of tyre and or bending of able shaft etc. remedies are
            to replace the worn out bent parts and balance the affected wheel
            perfectly. {"\n"}
            4. Wheel Bounce: this may be due to incorrect inflates, eccentricity
            of wheel and tyre, imbalanced wheel or brake drum. Remedies are to
            correct the tyre pressure and replace the unbalanced parts. {"\n"}
            5. One sided Wear at Tyres: it may be due to incorrect toe-in or
            incorrect camber angle. Remedy is to correct the toe-in or camber
            angle. {"\n"}
            6. Side wear of Tyres: when the tyre tread wears equally more at the
            side then the entire, the reason for this is the tyre pressure.
            Remedy is to correct the tyre pressure. {"\n"}
            7. Feathered Edged Tread Wear: it may be due to severe toe-in or
            toe-out, remedy is the correct the toe-in or and toe-out of the
            vehicle.
          </Content>
          <SubHeadingText2 text="FACTORS AFFECTING TYRE LIFE " />
          <Content>
            Since the tyre cost is a major factor in the transport field or of
            this individual vehicle. Therefore to save the tyre-life is very
            essential. The main factors affecting the tyre life are as follows;{" "}
            {"\n"}
            1. Inflation {"\n"}
            2. Over-Loading.{"\n"}
            3. Speed of the vehicle.{"\n"}
            4. Vehicle Maintenance.{"\n"}
            5. Road Condition {"\n"}
            6. Tyre Temperature 7. Seasons {"\n"}
            1. Inflation: Correct air pressure is very essential for proper
            working and longer life of a tyre. In under-inflated tyre has more
            wears on the sides it results to a separate of plies, loosen of
            cords, impact between the rim and the side walls. Thereby developing
            unbearable damage and cracks in the tyre. An over-inflated tyre wean
            rapidly at its center, it results to fabric wear. {"\n"}
            2. Over-Loading: the axles, wheel and the tyres of a vehicle are
            designed to carry a pre-decided payload. If the vehicle is
            over-loaded then the axle inside the wheels may not be able to
            support the extra load. Under the circumstances the current-inflated
            tyre will behave like an under-inflated tyre, thus reducing the tyre
            life as well as tyre performance. {"\n"}
            3. Speed of the Vehicles: the manner in which a car is driven also
            affects the tyre life. The tread wear increasing with the increase
            of speed. The tread wear increasing with the increase of speed.{" "}
            {"\n"}
            4. Vehicle Maintenance: the vehicle maintenance and its disturbed
            alignment geometries affect the tyre life. Such factors include as
            toe-in toe-out, loose steering linkage, warn out wheel bearings,
            fault hub, faulty axle assemblies etc. therefore, vehicle
            maintenance should be performed as per the specifications of the
            vehicle manufacturers. {"\n"}
            5. Road Condition: a tyre gives 50% performance in that obtained on
            smooth road, while used in unmade country roads, similarly, when a
            tyre runs in broken up roads a damage called tread chipping is
            experienced if a tyre is used even on good roads, in hilly areas,
            the tyre life is reduced to half of that is obtained on normal plain
            road. In this way, the tyre life very much depends on the condition
            of the road on which it travels. {"\n"}
            6. Seasons: in winter the tyre heat-failures are less thereby giving
            more mileage. In case of new tyre the tread thickness is enough and
            thus heat dissipation is shower. If it is fitted in winter its tread
            will wear out to some extent by the time summer season arrives. In
            the thickness tread will help to dissipate the heat faster thereby
            running the tyre cooler and giving better mileage. Thus tyre fitted
            in winter gives more millage than that fitted in the summer. {"\n"}
            7. Tyre Temperature: heat is the biggest enemy of tyres which are
            constructed from rubber. Because of the tyres which are constructed
            from rubber. Because of the tyres moving on the road at high speed;
            it gets exposed to optimum stretch, compression and friction. A
            direct consequence of this is the rise in tyre temperature which
            easily exacerbates and even punctures its rubber material and makes
            the tyre wear out. {"\n"}
            8. Bleeding: air inside the tube expands due to generating heat
            while the vehicle is running on the road, this increases the
            pressure. Driver thinking that it is over-inflation and he bleeds
            out some air to bring down the tyre pressure. The driver does not
            realize the fact that the tyre deflects more after bleeding, which
            results increase in temperature and pressure again. Tyres fail due
            to gross under-inflation. Therefore undue bleeding must not be
            restricted.
          </Content>
          <SubHeadingText2 text="CARE AND MAINTENANCE OF RIMS, TYRE & TUBES" />
          <Content>
            A number of repairs can be made but the following factors should be
            considered for proper care and maintenance of rim, tyres and tubes.{" "}
            {"\n"}
            1. Alignment of Wheels: to protect the undue tread wear of the
            tyres, the proper alignment of the wheels is essential. If the
            wheels are cut of the line then the tyre tread will wear in a very
            short period. {"\n"}
            2. Proper Inflation: there should be proper inflation or recommended
            pressure in tyre. Under-inflation and over-inflation are the causes
            of the tread wear of the tyre. {"\n"}
            3. Running a flat tyre: to run a vehicle with flat tyre is a costly
            operation, because a short distance under things condition spoils
            the retreadability of the tyre. {"\n"}
            4. Setting brakes suddenly: always set the brakes such that they may
            be operated gradually. A sudden braking result tyre drying by which
            dragging, the treads are worn out and loosened on the casing. {"\n"}
            5. Keep rims in good order: the rims of the wheels should be
            straight, true and balances, clean the rims with sand paper if are
            rusted than point to protect them. {"\n"}
            6. Retain some pressure in the tube: to avoid the sharp creasing and
            cracks in the tube, always retain some pressure before folding and
            storing it.
          </Content>
          <SubHeadingText2 text="Inspection of tyre:" />
          <Content>
            Examine the tyres occasionally and remove small pieces of glass,
            stones, and iron sticking in the tyre treads.
          </Content>
        </Container>
      </>
    ),
  },
];
